function buildSecondaryTraining (data) {
  // get data needed for secondary plan
  const goal = String(data.cardioGoal);
  // Helper to create plan object
  function plan(focusLabel, sessions) {
    return {
      focusLabel: focusLabel,
      sessions: sessions
    };
  }
  // Define secondary training plans
  const SECONDARY = {
    noCardio: plan("No Secondary Focus", []),

    customSecondary: plan("Secondary Focus", []),

    mobility: plan("Mobility & Flexibility Focus", [
      { activity: "Warm-up mobility", notes: "5–10 min (leg swings, arm circles, gentle twists)" },
      { activity: "Easy yoga / stretch flow", notes: "10–20 min" },
      { activity: "Hold stretches", notes: "5–10 min (hips, hamstrings, calves)" },
      { activity: "Cool down", notes: "2–5 min slow relaxed breathing" }
    ]),

    cardioMobility: plan("Cardio + Mobility Focus", [
      { activity: "Easy cardio", notes: "10–20 min (walk, bike, or jog)" },
      { activity: "Warm-up mobility", notes: "5–10 min (leg swings, arm circles, gentle twists)" },
      { activity: "Stretching", notes: "5–10 min (hips + legs + shoulders)" },
      { activity: "Cool down", notes: "2–5 min slow relaxed breathing" }
    ]),

    endurance: plan("Cardiovascular Endurance Focus", [
      { activity: "Steady cardio", notes: "20–45 min (you can talk while doing it)" },
      { activity: "Optional longer day", notes: "1 day/week: 40–60 min easy pace" },
      { activity: "Cool down", notes: "5 min slow walk + light stretch" }
    ]),

    sprintTraining: plan("Sprint Training Focus", [
      { activity: "Warm-up", notes: "5–10 min easy jog/walk + leg swings" },
      { activity: "Short sprints", notes: "6–10 rounds: 10–20 sec fast" },
      { activity: "Rest Walks", notes: "1–2 min walk between sprints" },
      { activity: "Cool down", notes: "5 min walk + light stretch" }
    ]),

    circuitTraining: plan("Circuit Training Focus", [
      { activity: "Pick 5 moves", notes: "Example: squat, push-up, row, lunge, plank" },
      { activity: "Do the circuit", notes: "30 sec each move, then rest 1 min" },
      { activity: "Repeat", notes: "3–5 rounds total" },
      { activity: "Cool down", notes: "5 min walk + stretch" }
    ]),
  };
  // Return the selected secondary training plan
  return SECONDARY[goal];
};
