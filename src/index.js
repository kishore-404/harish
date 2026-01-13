// must function to get form values
function must(id) {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error('Missing element with id="' + id + '"');
  }
  return el.value;
}

// submit form code
async function submitForm(event) {
  event.preventDefault();

  const data = {
    age: must("userInputAge"),
    gender: must("userInputGender"),

    feet: must("userInputFeet"),
    inches: must("userInputInches"),
    currentWeight: must("userInputCurrentWeight"),
    goalWeight: must("goalWeight"),

    liftingGoal: must("liftingGoal"),
    split: must("split"),

    cardioGoal: must("cardioGoal"),
    dietType: must("dietType"),

    includeRecovery: must("includeRecovery"),
  };

  localStorage.setItem("ezFormData", JSON.stringify(data));
  // ensuring safety with try-catch
  try {
    window.location.assign("src/view_result.html");
  } catch {
    alert("Could not open results page. File may have been moved.");
  }
}

document.getElementById("myForm").addEventListener("submit", submitForm);
