const chartMargin = { top: 70, right: 40, bottom: 70, left: 80 };
const chartWidth = 1000 - chartMargin.left - chartMargin.right;
const chartHeight = 600 - chartMargin.top - chartMargin.bottom;

const chartSVG = d3.select("#chart")
  .append("svg")
    .attr("width", chartWidth + chartMargin.left + chartMargin.right)
    .attr("height", chartHeight + chartMargin.top + chartMargin.bottom)
  .append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

const infoBox = d3.select("body").append("div")
  .attr("class", "tooltip");

d3.csv("data/youth_smoking_drug_data_10000_rows_expanded.csv").then(rawData => {
  console.log("Loaded dataset:", rawData);

  rawData.forEach(row => {
    row.Year = +row.Year;
    row.Smoking_Prevalence = +row.Smoking_Prevalence;
  });

  const filteredData = rawData.filter(row => row.Gender === "Both");

  const yearlyAverages = Array.from(
    d3.rollup(
      filteredData,
      v => d3.mean(v, d => d.Smoking_Prevalence),
      d => d.Year
    ),
    ([Year, Smoking_Prevalence]) => ({ Year, Smoking_Prevalence })
  ).sort((a, b) => a.Year - b.Year);

  const xScale = d3.scaleBand()
    .domain(yearlyAverages.map(d => d.Year))
    .range([0, chartWidth])
    .padding(0.1);

  const minY = d3.min(yearlyAverages, d => d.Smoking_Prevalence);
  const maxY = d3.max(yearlyAverages, d => d.Smoking_Prevalence);

  const yScale = d3.scaleLinear()
    .domain([minY - 0.1, maxY + 0.1])
    .range([chartHeight, 0]);

  const gridlines = d3.axisLeft(yScale)
    .tickSize(-chartWidth)
    .tickFormat("");

  chartSVG.append("g")
    .attr("class", "grid")
    .call(gridlines)
    .selectAll("line")
    .attr("stroke", "#ddd")
    .attr("stroke-opacity", 0.7);

  chartSVG.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .style("font-size", "13px");

  chartSVG.append("g")
    .call(d3.axisLeft(yScale))
    .selectAll("text")
    .style("font-size", "13px");

  chartSVG.append("text")
    .attr("x", chartWidth / 2)
    .attr("y", chartHeight + 40)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Year");

  chartSVG.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -chartHeight / 2)
    .attr("y", -50)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Smoking Prevalence (%)");

  chartSVG.append("text")
    .attr("x", chartWidth / 2)
    .attr("y", -20)
    .attr("text-anchor", "middle")
    .style("font-size", "26px")
    .style("font-weight", "bold")
    .text("Youth Smoking Prevalence Trends (2020–2024)");

  const lineGenerator = d3.line()
    .x(d => xScale(d.Year) + xScale.bandwidth() / 2)
    .y(d => yScale(d.Smoking_Prevalence));

  chartSVG.append("path")
    .datum(yearlyAverages)
    .attr("fill", "none")
    .attr("stroke", "#1f77b4")
    .attr("stroke-width", 3)
    .attr("d", lineGenerator)
    .attr("opacity", 0)
    .transition()
    .duration(1000)
    .attr("opacity", 1);

  chartSVG.selectAll("circle")
    .data(yearlyAverages)
    .enter()
    .append("circle")
      .attr("cx", d => xScale(d.Year) + xScale.bandwidth() / 2)
      .attr("cy", d => yScale(d.Smoking_Prevalence))
      .attr("r", 5)
      .attr("fill", "red")
      .attr("opacity", 0)
      .transition()
      .duration(600)
      .attr("opacity", 1);

  chartSVG.selectAll("circle")
      .on("mouseover", (event, d) => {
        infoBox.style("display", "block")
               .html(
                 "Year: " + d.Year +
                 "<br>Smoking Prevalence: " + d.Smoking_Prevalence.toFixed(2) + "%"
               );

        d3.select(event.target)
          .attr("r", 8);
      })
      .on("mousemove", event => {
        infoBox.style("left", (event.pageX + 10) + "px")
               .style("top", (event.pageY + 10) + "px");
      })
      .on("mouseout", event => {
        infoBox.style("display", "none");
        d3.select(event.target).attr("r", 5);
      });

});
