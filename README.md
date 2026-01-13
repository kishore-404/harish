# Simple Fitness Plan Generator
A lightweight web app that generates a personalized fitness plan based on user inputs — including a primary workout routine, optional secondary training focus, and (optionally) a diet plan with estimated calories + macros. The output is fully editable & can be saved as a PDF.

## Features
- Generates goal-based resistance training programs (Bodybuilding, Powerlifting, Calisthenics, Glute Focus, Lean Muscle & Definition, etc.)
- Supports multiple split styles (Full Body, Upper/Lower, PPL, etc.) depending on training frequency
- Optional secondary training focus (cardio, mobility, sprint training, circuit training, etc.)
- Optional diet plan generator with **estimated daily calories + macros** based on:
  - age, gender, height, weight
  - user goal (lose/maintain/gain weight)
  - selected diet preference (Mediterranean, Vegan, Keto, Lean Muscle, etc.)
- Output is **fully editable** (users can change any cell in the plan)
- Export/save results as a **PDF**

## Sample Inputs & Outputs
Example plans are included in the `samples/` folder.

### 1) Calisthenics (Weight Loss)
- Input:

<p align="center">
  <a href="samples/01_input_weight_loss_calisthenics.png">
    <img src="samples/01_input_weight_loss_calisthenics.png" width="350">
  </a>
</p>


- Output PDF: [02_output_weight_loss_calisthenics.pdf](samples/02_output_weight_loss_calisthenics.pdf)

### More examples (PDF)
- [Powerlifting Weight Gain](samples/04_output_weight_gain_powerlifting.pdf)
- [Maintain Weight + Glute Focus](samples/06_output_maintain_weight_glute_lower_body.pdf)
- [Bodybuilding + Vegan Weight Gain](samples/08_output_weight_gain_bodybuilding_vegan_privacy.pdf)

## Project Structure

This project assumes the following folder structure.  
**Do not move files unless you also update the corresponding paths in the code.**

```
SIMPLE-FITNESS-PLAN-GENERATOR/
└── src/
    └── builders/
        ├── dietBuilder.js
        ├── primaryBuilder.js
        └── secondaryBuilder.js
    ├── index.css
    ├── index.js
    ├── view_result.css
    ├── view_result.html
    ├── view_result.js
├── index.html
├── README.md
```

---

## File Overview

### `index.html`

Main entry point of the app. Contains the user input form.

### `src/index.js`

Handles the form logic:

* collects user inputs
* builds the `data` object
* saves it in `localStorage` under the key `ezFormData`
* redirects to the results page

### `src/index.css`

Styles for the input/form page (`index.html`).

---

### `src/view_result.html`

Results page. Displays the generated plan and allows the user to edit the output, copy it, or print/save as PDF.

### `src/view_result.js`

Controller for the results page:

* reads `ezFormData` from `localStorage`
* fills the top “pill” summary bubbles
* removes unused sections if user picked “none/no”
* calls builder modules in `src/builders/`

### `src/view_result.css`

Styles for the results page (`view_result.html`).

---

## Builder Modules (`src/builders/`)

Each builder file is responsible for generating a specific section of the plan.

* **`dietBuilder.js`**
  Builds the diet plan content + daily calories section.

* **`primaryBuilder.js`**
  Builds the primary resistance training plan section.

* **`secondaryBuilder.js`**
  Builds the secondary focus (cardio/mobility/etc.) section.

Builders should define functions only (no auto-running code).
They are loaded by `view_result.html` and called from `view_result.js`.

*Note: Some README wording was refined with the help of AI tools.*

