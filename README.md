# D3.js Visualization – Youth Smoking Prevalence Trends (2020–2024)

This repository is where my personal Assignment 3 (D3.js Visualization) implementation can be found. This assignment aims to develop an interactive and animated visualization with D3.js on the basis of the data that was chosen in our team project. The type of visualization I have chosen is Line Chart and this is unique among my team members.

---

## Project Overview

The graph represents the trend of youth smoking in 2020–2024. It shows the change in the smoking rates with time and helps define the growing or falling trends.

The visualization includes:

- A curve between the annual smoking prevalence  
- Red circles to represent data points  
- Smooth animations  
- Interactive tooltip on hover  
- Clean layout with axis labels and gridlines  

---

## Dataset Information

Dataset: `youth_smoking_drug_data_10000_rows_expanded.csv`  
Folder = data  

---

### Data Processing steps

- Went through numeric data (Year, Smoking Prevalence) and transformed it into numbers.  
- Filled dataset to consider only gender = "Both".  
- Calculated annual means with the help of D3 rollup functions.  

---

## Visualization Design

### Type: Line Chart

---

### Visual Encodings

| Visual Element | Meaning |
|----------------|---------|
| Blue line | Trend of smoking prevalence |
| Red circles | Data points |
| X-axis | Years |
| Y-axis | Smoking prevalence |
| Gridlines | Improve readability |

---

## Interactive Features

This visualization includes the following interactions:

### Tooltip on Hover  
Shows the value of the year and prevalence of smoking.

### Hover Highlight  
On hover, the circle is expanded to make it visible.

### Tooltip Follows Mouse  
Improves user readability and interaction.

---

## Running the Project

1. Open folder in VS Code  
2. Install the **Live Server** extension  
3. Right-click on `index.html` → **Open with Live Server**

---

## Source Code Structure

The project folder contains the following files:

├── data
│ └── youth_smoking_drug_data_10000_rows_expanded.csv
├── js
│ └── script.js
├── image.png
├── index.html
├── style.css
└── README.md


---

## Sources Used

I referred to the following resources while building this visualization:

- **W3Schools – JavaScript & SVG basics**  
  https://www.w3schools.com/

- **GeeksforGeeks – D3.js tutorials and explanations**  
  https://www.geeksforgeeks.org/d3-js/

- **FreeCodeCamp – D3.js guide and examples**  
  https://www.freecodecamp.org/news/tag/d3/

- **D3.js Official Documentation**  
  https://d3js.org/

These resources were used only for understanding concepts.

---

## Use of Generative AI

I used chatgpt for understanding the concepts of D3.js.

