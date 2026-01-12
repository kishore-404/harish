function buildDietPlan(data) {
  // extract and convert form data
  const weightLb = Number(data.currentWeight);
  const gender = String(data.gender);
  const age = Number(data.age);
  const feet = Number(data.feet);
  const inches = Number(data.inches);
  const weightGoal = String(data.goalWeight); 
  const split = String(data.split);
  const splitToDays = {
    FullBody2x: 2,
    FullBody3x: 3,
    UL: 4,
    PPLUP: 5,
    PPL: 6
  };
  const daysPerWeek = splitToDays[split];
  const dietType = String(data.dietType);

  const heightInches = feet * 12 + inches;

  // calorie calculation
  let calories = weightLb * 15;

  if (gender === "Male") calories += 200;
  else if (gender === "Female") calories -= 200;

  if (age >= 60) calories -= 400;
  else if (age >= 50) calories -= 300;
  else if (age >= 40) calories -= 200;
  else if (age >= 30) calories -= 100;

  calories += (heightInches - 70) * 25;

  const neutralDays = 3;
  calories += (daysPerWeek - neutralDays) * 150;

  if (weightGoal === "Gain") calories += 500;
  else if (weightGoal === "Lose") calories -= 500;

  calories = Math.round(Math.max(calories, 1200));

  // macronutrient calculation
  const macroRatios = {
  noDiet:         { carbs: 0.50, protein: 0.25, fat: 0.25 },
  default:        { carbs: 0.50, protein: 0.25, fat: 0.25 },
  lean:           { carbs: 0.45, protein: 0.30, fat: 0.25 },
  keto:           { carbs: 0.05, protein: 0.30, fat: 0.65 },
  vegan:          { carbs: 0.55, protein: 0.25, fat: 0.20 },
  mediterranean:  { carbs: 0.40, protein: 0.30, fat: 0.30 }, 
  customDiet:     { carbs: 0.50, protein: 0.25, fat: 0.25 },

  };

  const ratios = macroRatios[dietType];

  let proteinG = Math.round((calories * ratios.protein) / 4);
  let carbsG   = Math.round((calories * ratios.carbs) / 4);
  let fatG     = Math.round((calories * ratios.fat) / 9);

  // diet meal plan templates
  function mealTemplate(dietLabel, meals) {
    return {
      dietLabel: dietLabel,
      meals: [
        { mealNumber: 1, options: meals.breakfast },
        { mealNumber: 2, options: meals.lunch },
        { mealNumber: 3, options: meals.snacks },
        { mealNumber: 4, options: meals.dinner }
      ]
    };
  }

  // diet meal plans
  const DIETS = {
  noDiet: mealTemplate("No Diet Plan", {
    breakfast: [],
    lunch: [],
    snacks: [],
    dinner: []
  }),
  
  customDiet: mealTemplate("Diet Plan", {
    breakfast: [],
    lunch: [],
    snacks: [],
    dinner: []
  }),

  default: mealTemplate("Traditional American Diet", {
    breakfast: [
      "Eggs + toast + fruit",
      "Cereal + milk + banana",
      "Pancakes or waffles + eggs",
      "Bagel + cream cheese + yogurt",
      "Breakfast sandwich (egg + cheese + bacon or sausage)"
    ],

    lunch: [
      "Sandwich + chips + fruit",
      "Burger + fries or side salad",
      "Chicken sandwich + fries or side salad",
      "Ground beef tacos or burrito bowl",
      "Rice bowl (chicken or beef + veggies)",
      "Pizza slices + side salad"
    ],

    snacks: [
      "Protein shake",
      "Granola bar + fruit",
      "Yogurt cup",
      "Nuts or trail mix",
      "PB&J half sandwich",
      "Dessert or treat (ice cream, cookies, pie)"
    ],

    dinner: [
      "Grilled steak + potatoes + veggies",
      "Grilled or roast chicken + potatoes + veggies",
      "Chicken, rice, and broccoli",
      "BBQ chicken or ribs + corn or potatoes",
      "Fried chicken + classic sides",
      "Salmon or baked fish + rice or potatoes"
    ]
  }),

  lean: mealTemplate("Lean Muscle Diet", {
    breakfast: [
      "Egg whites + whole eggs + oats + berries",
      "Greek yogurt (high protein) + berries + honey",
      "Oatmeal + whey protein + banana",
      "Turkey + egg breakfast wrap + fruit",
      "Cottage cheese + fruit + light granola"
    ],
    lunch: [
      "Chicken breast + rice + veggies",
      "Lean turkey sandwich (whole grain) + fruit",
      "Lean beef + quinoa or rice + veggies",
      "Tuna or salmon bowl + rice + greens",
      "High-protein wrap + side fruit"
    ],
    snacks: [
      "Protein shake + fruit",
      "Greek yogurt + berries",
      "Cottage cheese",
      "Rice cakes + peanut butter",
      "Jerky + fruit"
    ],
    dinner: [
      "Chicken + potatoes + veggies",
      "Lean beef stir-fry + rice",
      "Salmon + rice + veggies",
      "Shrimp + pasta (light sauce) + salad",
      "Turkey chili + veggies"
    ]
  }),

  keto: mealTemplate("Keto Diet", {
    breakfast: [
      "Eggs + avocado + bacon or sausage",
      "Omelet with cheese + spinach + mushrooms",
      "Plain Greek yogurt (unsweetened) + nuts",
      "Chia pudding (unsweetened) + small berries",
      "Eggs + ground beef + cheese bowl"
    ],
    lunch: [
      "Chicken salad (mayo or olive oil) + greens",
      "Bunless burger + cheese + side salad",
      "Steak + broccoli + butter",
      "Salmon + asparagus + olive oil",
      "Tuna salad lettuce wraps"
    ],
    snacks: [
      "Cheese + nuts",
      "Hard-boiled eggs",
      "Beef jerky (low sugar)",
      "Olives + cheese",
      "Avocado + salt"
    ],
    dinner: [
      "Chicken thighs + cauliflower rice + veggies",
      "Ground beef bowl + cheese + salsa (no rice/beans)",
      "Pork chops + green beans + butter",
      "Salmon + zucchini noodles",
      "Egg-based dinner (frittata + salad)"
    ]
  }),

  vegan: mealTemplate("Vegan Diet", {
    breakfast: [
      "Overnight oats with soy milk + berries",
      "Tofu scramble + toast",
      "Smoothie: soy milk + banana + peanut butter + oats",
      "Chia pudding + fruit",
      "Avocado toast + side fruit"
    ],
    lunch: [
      "Rice + beans + salsa + veggies bowl",
      "Lentil curry + rice",
      "Tofu or tempeh stir-fry + rice or noodles",
      "Chickpea salad wrap + veggies",
      "Peanut noodle bowl + edamame"
    ],
    snacks: [
      "Trail mix + fruit",
      "Hummus + pita + veggies",
      "Vegan protein shake (pea or soy)",
      "Peanut butter + banana",
      "Roasted chickpeas"
    ],
    dinner: [
      "Tofu or tempeh + rice + veggies",
      "Bean chili + cornbread (vegan)",
      "Pasta + marinara + lentils",
      "Burrito bowl: rice + beans + guac + veggies",
      "Stir-fry + quinoa"
    ]
  }),

  mediterranean: mealTemplate("Mediterranean Diet", {
    breakfast: [
      "Greek yogurt + honey + nuts + berries",
      "Eggs + whole-grain toast + olive oil drizzle",
      "Oats + fruit + nuts",
      "Smoked salmon toast + tomato + cucumber",
      "Cottage cheese + fruit + nuts"
    ],
    lunch: [
      "Chicken or gyro-style bowl: rice + salad + tzatziki",
      "Tuna salad + olive oil + bread + veggies",
      "Lentil salad + feta + olive oil",
      "Salmon + quinoa + greens",
      "Hummus bowl + pita + veggies + protein"
    ],
    snacks: [
      "Fruit + nuts",
      "Greek yogurt",
      "Hummus + veggies",
      "Olives + feta",
      "Whole-grain toast + olive oil"
    ],
    dinner: [
      "Salmon + roasted veggies + rice",
      "Chicken + potatoes + salad",
      "Shrimp + pasta + olive oil + garlic",
      "Beef or lamb + veggies + couscous",
      "Chickpea stew + bread"
    ]
  }),
};
  // return diet plan and macros
  return {calories, proteinG, carbsG, fatG, diet: DIETS[dietType]};
};
