# D3.js Visualization – Youth Smoking Prevalence Trends (2020–2024)

This repository is where my personal Assignment 3 (D3.js Visualization) implementation can be found.  
This assignment aims to develop an interactive and animated visualization with D3.js based on the data chosen in our team project.  
The type of visualization I have chosen is a **Line Chart**, which is unique among my team members.

---

## Project Overview

The graph represents the trend of youth smoking from 2020–2024.  
It shows how smoking rates change over time and helps identify increasing or decreasing trends.

### The visualization includes:
- A curve representing annual smoking prevalence  
- Red circles as data points  
- Smooth animations  
- Interactive tooltip on hover  
- Clean layout with axis labels and gridlines  

---

## Dataset Information

**Dataset:** `youth_smoking_drug_data_10000_rows_expanded.csv`  
**Folder:** `/data`

---

### Data Processing Steps
- Transformed numeric data (`Year`, `Smoking_Prevalence`) into numbers  
- Filtered dataset to consider only `Gender = "Both"`  
- Calculated annual means using D3 rollup functions  

---

## Visualization Design

### Type
**Line Chart**

---

### Visual Encodings

| Visual Element | Meaning |
|----------------|---------|
| Blue line | Trend of smoking prevalence |
| Red circles | Data points |
| X-axis | Years |
| Y-axis | Smoking prevalence (%) |
| Gridlines | Improve readability |

---

## Interactive Features

This visualization includes the following interactions:

### Tooltip on Hover  
Shows the year and the smoking prevalence value.

### Hover Highlight  
Circle enlarges when hovered for better visibility.

### Tooltip Follows Mouse  
Tooltip moves with the cursor to improve readability.

---

## Running the Project

1. Open folder in VS Code  
2. Install the **Live Server** extension  
3. Right-click on `index.html` → **Open with Live Server**

---

## Source Code Structure

The project folder contains the following files:

