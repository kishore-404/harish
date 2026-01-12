// get the raw data from localStorage
const data = JSON.parse(localStorage.getItem("ezFormData") || "{}");

// Remove sections if user picked none/no
if (data.liftingGoal === "noLifting") document.getElementById("primarySection")?.remove();
if (data.cardioGoal === "noCardio") document.getElementById("secondarySection")?.remove();
if (data.dietType === "noDiet") document.getElementById("dietSection")?.remove();
if (data.includeRecovery === "no") document.getElementById("recoveryWrap")?.remove();


// RENDER PRIMARY TABLE
const primarySectionEl = document.getElementById("primarySection");

if (primarySectionEl) {
  const primaryPlan = buildPrimaryTraining(data);

  // set title
  document.getElementById("primaryTitle").textContent = primaryPlan.focusLabel;

  // get primary table rows
  const primaryRows = document.querySelectorAll("#primarySection tbody tr");

  // map splitKey -> sessionsNumber in your builder
  const splitToSessionsNumber = {
    FullBody2x: 1,
    FullBody3x: 2,
    UL: 3,
    PPLUP: 4,
    PPL: 5
  };

  // find the chosen split
  const chosen = primaryPlan.sessions.find(s => s.sessionsNumber === splitToSessionsNumber[data.split]);

  // week must be a 7-day array
  const week = chosen.options;

  //  number of rows in the table
  const ROWS = primaryRows.length;

  // for loop to fill it all out
  for (let r = 0; r < ROWS; r++) {
    for (let d = 0; d < 7; d++) {
      primaryRows[r].children[d + 1].textContent = week[d][r] ?? "—";
    }
  }

  // set header labels based on split
  const headerLabelsBySplit = {
    FullBody2x: ["Full Body", "Rest", "Rest", "Full Body", "Rest", "Rest", "Rest"],
    FullBody3x: ["Full Body", "Rest", "Full Body", "Rest", "Full Body", "Rest", "Rest"],
    UL:         ["Upper", "Lower", "Rest", "Upper", "Lower", "Rest", "Rest"],
    PPLUP:      ["Push", "Pull", "Legs", "Rest", "Upper", "Lower", "Rest"],
    PPL:        ["Push", "Pull", "Legs", "Push", "Pull", "Legs", "Rest"]
  };
  
  // get header cells
  const primaryHeaderCells = document.querySelectorAll("#primarySection thead th");

  // set header cells differently for customPrimary
  if (data.liftingGoal === "customPrimary") {
    for (let d = 0; d < 7; d++) {
      primaryHeaderCells[d + 1].textContent = `Day ${d + 1}:`;
    }
  } else {
    // set header cells
    const labels = headerLabelsBySplit[data.split];

    // fill in header cells
    for (let d = 0; d < 7; d++) {
      primaryHeaderCells[d + 1].textContent = `Day ${d + 1}: ${labels[d]}`;
    }
  }
}

// render secondary exercises table
const secondarySectionEl = document.getElementById("secondarySection");

if (secondarySectionEl) {
  const secondaryPlan = buildSecondaryTraining(data);
  const secondaryRows = document.querySelectorAll("#secondarySection tbody tr");

  // set secondary focus title
  document.getElementById("secondaryTitle").textContent = secondaryPlan.focusLabel;

  // Fill rows with actual secondary sessions
  for (let i = 0; i < secondaryPlan.sessions.length; i++) {
    const session = secondaryPlan.sessions[i];
    const row = secondaryRows[i];
    if (!row) continue;

    row.children[1].textContent = session.activity;
    row.children[2].textContent = session.notes;
  }

  // Fill remaining rows with em dash
  for (let i = secondaryPlan.sessions.length; i < secondaryRows.length; i++) {
    secondaryRows[i].children[1].textContent = "—";
    secondaryRows[i].children[2].textContent = "—";
  }
}

// render diet plan
const dietSectionEl = document.getElementById("dietSection");

if (dietSectionEl) {
  const diet = buildDietPlan(data);
  const dietRows = document.querySelectorAll("#dietSection tbody tr");

  // set diet title
  document.getElementById("dietTitle").textContent = diet.diet.dietLabel;

  // Fill rows with actual diet info
  for (let i = 0; i < diet.diet.meals.length; i++) {
    const meal = diet.diet.meals[i];
    const row = dietRows[i];
    if (!row) continue;

    row.children[1].innerHTML = "- " + meal.options.join("<br>- ");
  }

  // Fill remaining rows with em dash
  for (let i = diet.diet.meals.length; i < dietRows.length; i++) {
    dietRows[i].children[1].textContent = "—";
  }

  // set diet calorie and macro info into view_result
  document.getElementById("outCalories").textContent = `${diet.calories} kcal`;
  document.getElementById("outProtein").textContent = `${diet.proteinG} g`;
  document.getElementById("outCarbs").textContent = `${diet.carbsG} g`;
  document.getElementById("outFat").textContent = `${diet.fatG} g`;
}
