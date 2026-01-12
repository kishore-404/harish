function buildPrimaryTraining(data) {
  const focus = String(data.liftingGoal);

  // Helper to create plan object
  function plan(focusLabel, splits) {
    return {
      focusLabel,
      sessions: [
        { sessionsNumber: 1, options: splits.FullBody2x },
        { sessionsNumber: 2, options: splits.FullBody3x },
        { sessionsNumber: 3, options: splits.UL },
        { sessionsNumber: 4, options: splits.PPLUP },
        { sessionsNumber: 5, options: splits.PPL }
      ]
    };
  }

  // handy rest day (6 rows in your table)
  const REST = ["—", "—", "—", "—", "—", "—", "—"];

  // define workout plans
  const workoutPlans = {
    noLifting: plan("No Primary Focus", {
      FullBody2x: [REST, REST, REST, REST, REST, REST, REST],
      FullBody3x: [REST, REST, REST, REST, REST, REST, REST],
      UL:        [REST, REST, REST, REST, REST, REST, REST],
      PPLUP:     [REST, REST, REST, REST, REST, REST, REST],
      PPL:       [REST, REST, REST, REST, REST, REST, REST]
    }),

    customPrimary: plan("Primary Focus", {
      FullBody2x: [REST, REST, REST, REST, REST, REST, REST],
      FullBody3x: [REST, REST, REST, REST, REST, REST, REST],
      UL:        [REST, REST, REST, REST, REST, REST, REST],
      PPLUP:     [REST, REST, REST, REST, REST, REST, REST],
      PPL:       [REST, REST, REST, REST, REST, REST, REST]
    }),

    leanFocus: plan("Lean Muscle & Definition Focus", {
      FullBody2x: [
        ["Front Squat 4x8", "Incline DB Press 4x10", "Pull Ups 4x8", "Romanian Deadlift 3x10", "Lateral Raises 3x15", "Hanging Leg Raises 3x12", "Calf Raises 4x12"],
        REST,
        REST,
        ["Leg Press 4x12", "DB Bench Press 4x10", "Cable Rows 4x12", "Walking Lunges 3x12", "Hamstring Curls 3x12", "Cable Crunches 3x15", "Rear Delt Fly 3x15"],
        REST,
        REST,
        REST
      ],

      FullBody3x: [
        ["Back Squat 4x8", "Bench Press 4x10", "Lat Pulldowns 4x12", "Leg Extensions 3x15", "Lateral Raises 3x15", "Plank 3x60s", "Calf Raises 4x12"],
        REST,
        ["Romanian Deadlift 4x10", "Incline DB Press 4x12", "Cable Rows 4x12", "Hamstring Curls 3x15", "Rear Delt Fly 3x15", "DB Bicep Curls 3x12", "Hanging Leg Raises 3x12"],
        REST,
        ["Leg Press 4x12", "Overhead Press 4x10", "Pull Ups 4x8", "Walking Lunges 3x12", "Cable Fly 3x15", "Tricep Pushdowns 3x15", "Cable Crunches 3x15"],
        REST,
        REST
      ],

      UL: [
        ["Incline DB Press 4x10", "Pull Ups 4x8", "DB Overhead Press 3x12", "Cable Fly 3x15", "Lateral Raises 3x15", "Tricep Pushdowns 3x15", "Hanging Leg Raises 3x12"],
        ["Back Squat 4x8", "Romanian Deadlift 3x10", "Leg Press 3x12", "Hamstring Curls 3x15", "Calf Raises 4x12", "Cable Crunches 3x15"],
        REST,
        ["DB Bench Press 4x10", "Lat Pulldowns 4x12", "Cable Rows 3x12", "Rear Delt Fly 3x15", "Barbell Curls 3x12", "Hammer Curls 3x12", "Plank 3x60s"],
        ["Front Squat 4x10", "Walking Lunges 3x12", "Leg Extensions 3x15", "Hamstring Curls 3x15", "Calf Raises 4x12", "Hanging Leg Raises 3x12"],
        REST,
        REST
      ],

      PPLUP: [
        ["Bench Press 4x10", "Incline DB Press 3x12", "Cable Fly 3x15", "DB Overhead Press 3x12", "Lateral Raises 3x15", "Tricep Pushdowns 3x15"],
        ["Pull Ups 4x8", "Cable Rows 4x12", "Lat Pulldowns 3x12", "Barbell Curls 3x12", "Hammer Curls 3x12", "Rear Delt Fly 3x15"],
        ["Back Squat 4x8", "Romanian Deadlift 3x10", "Leg Press 3x12", "Leg Extensions 3x15", "Hamstring Curls 3x15", "Calf Raises 4x12"],
        REST,
        ["Incline Bench Press 4x10", "DB Bench Press 3x12", "Cable Fly 3x15", "Overhead Press 3x12", "Tricep Extensions 3x12", "Hanging Leg Raises 3x12"],
        ["Lat Pulldowns 4x12", "Cable Rows 4x12", "Rear Delt Fly 3x15", "Barbell Curls 3x12", "Plank 3x60s", "Cable Crunches 3x15"],
        REST
      ],

      PPL: [
        ["Bench Press 4x10", "Incline DB Press 3x12", "Cable Fly 3x15", "DB Overhead Press 3x12", "Lateral Raises 3x15", "Tricep Pushdowns 3x15"],
        ["Romanian Deadlift 4x10", "Lat Pulldowns 4x12", "Cable Rows 4x12", "DB Bicep Curls 3x12", "Hammer Curls 3x12", "Rear Delt Fly 3x15"],
        ["Back Squat 4x8", "Leg Press 3x12", "Walking Lunges 3x12", "Leg Extensions 3x15", "Hamstring Curls 3x15", "Calf Raises 4x12"],
        ["Incline Bench Press 4x10", "DB Bench Press 3x12", "Cable Fly 3x15", "Overhead Press 3x12", "Tricep Extensions 3x12", "Hanging Leg Raises 3x12"],
        ["Pull Ups 4x8", "Cable Rows 4x12", "Lat Pulldowns 3x12", "Barbell Curls 3x12", "Hammer Curls 3x12", "Rear Delt Fly 3x15"],
        ["Front Squat 4x10", "DB Romanian Deadlift 3x12", "Leg Press 3x12", "Leg Extensions 3x15", "Hamstring Curls 3x15", "Calf Raises 4x12", "Cable Crunches 3x15"],
        REST
      ]
    }),


    bodybuilding: plan("Bodybuilding Focus", {
      FullBody2x: [
      ["Back Squat 4x8", "Bench Press 4x8", "Lat Pulldowns 4x10", "Romanian Deadlift 3x10", "Lateral Raises 3x15", "Tricep Pushdowns 3x12", "DB Bicep Curls 3x12", "Calf Raises 4x12"],
      REST,
      REST,
      ["Leg Press 4x10", "Incline DB Press 4x10", "Cable Rows 4x10", "Hamstring Curls 3x12", "Leg Extensions 3x12", "Rear Delt Fly 3x15", "Cable Fly 3x12", "Calf Raises 4x12"],
      REST,
      REST,
      REST
    ],

      FullBody3x: [
        ["Back Squat 4x8", "Bench Press 4x8", "Lat Pulldowns 4x10", "Leg Extensions 3x12", "Lateral Raises 3x15", "Tricep Extensions 3x12", "Calf Raises 4x12"],
        REST,
        ["Romanian Deadlift 4x8", "Incline DB Press 4x10", "Cable Rows 4x10", "Hamstring Curls 3x12", "Rear Delt Fly 3x15", "Barbell Curls 3x10", "Cable Fly 3x12"],
        REST,
        ["Leg Press 4x10", "Overhead Press 4x8", "Pull Ups 4x8", "Leg Extensions 3x12", "Hamstring Curls 3x12", "Lateral Raises 3x15", "Tricep Pushdowns 3x12", "Hammer Curls 3x12", "Calf Raises 4x12"],
        REST,
        REST
      ],


      UL: [
        ["Bench Press 4x8", "Pull Ups 4x8", "Incline DB Press 3x10", "Cable Fly 3x12", "DB Bicep Curls 3x12", "Tricep Extensions 3x12", "Cable Rows 3x10"],
        ["Back Squat 4x8", "Romanian Deadlift 4x8", "Leg Press 3x10", "Leg Extensions 3x12", "Hamstring Curls 3x12", "Lateral Raises 3x15", "Rear Delt Fly 3x15"],
        REST,
        ["Overhead Press 4x8", "Lat Pulldowns 4x10", "Incline Bench Press 3x8", "Chest Dips 3x10", "Barbell Bicep Curls 3x10", "Tricep Pushdowns 3x12"],
        ["Deadlift 3x5", "Leg Press 4x10", "Hamstring Curls 3x12", "Leg Extensions 3x12", "Calf Raises 4x12", "Rear Delt Fly 3x15", "Lateral Raises 3x15"],
        REST,
        REST
      ],

      PPLUP: [
        ["Bench Press 4x8", "Incline DB Press 3x10", "Cable Fly 3x12", "DB Overhead Press 3x10", "Tricep Extensions 3x12", "Lateral Raises 3x15"],
        ["Pull Ups 4x8", "Cable Rows 3x10", "Lat Pulldowns 3x12", "Barbell Curls 3x10", "Hammer Curls 3x12", "Rear Delt Fly 3x15"],
        ["Back Squat 4x8", "Romanian Deadlift 4x8", "Leg Press 3x10", "Leg Extensions 3x12", "Hamstring Curls 3x12", "Calf Raises 4x12"],
        REST,
        ["Overhead Press 4x8", "Incline Bench Press 3x8", "DB Bench Press 3x10", "Tricep Pushdowns 3x12", "Lateral Raises 3x15"],
        ["Deadlift 3x5", "Cable Rows 3x10", "Lat Pulldowns 3x12", "Barbell Bicep Curls 3x10", "Rear Delt Fly 3x15"],
        REST
      ],

      PPL: [
        ["Bench Press 4x8", "Incline DB Press 3x10", "Cable Fly 3x12", "DB Overhead Press 3x10", "Tricep Extensions 3x12", "Lateral Raises 3x15"],
        ["Deadlift 3x5", "Lat Pulldowns 4x10", "Cable Rows 3x10", "DB Bicep Curls 3x12", "Hammer Curls 3x12", "Rear Delt Fly 3x15"],
        ["Back Squat 4x8", "Romanian Deadlift 4x8", "Leg Press 3x10", "Leg Extensions 3x12", "Hamstring Curls 3x12", "Calf Raises 4x12"],
        ["Overhead Press 4x8", "Incline Bench Press 3x8", "DB Bench Press 3x10", "Tricep Pushdowns 3x12", "Lateral Raises 3x15"],
        ["Pull Ups 4x8", "Cable Rows 3x10", "Lat Pulldowns 3x12", "Barbell Curls 3x10", "Hammer Curls 3x12", "Rear Delt Fly 3x15"],
        ["Front Squat 4x8", "DB Romanian Deadlift 3x10", "Leg Press 3x10", "Leg Extensions 3x12", "Hamstring Curls 3x12", "Calf Raises 4x12"],
        REST
      ]
    }),


    gluteFocus: plan("Glute Focus", {
      FullBody2x: [
        ["Hip Thrust 5x8", "Back Squat 4x8", "Romanian Deadlift 4x10", "Bulgarian Split Squats 3x10", "Cable Kickbacks 3x15", "Hip Abductions 4x15", "Calf Raises 4x12"],
        REST,
        REST,
        ["Sumo Deadlift 4x6", "Leg Press 4x10", "Walking Lunges 3x12", "Hamstring Curls 3x12", "Glute Bridge 4x12", "Cable Kickbacks 3x15", "Hip Abductions 4x15"],
        REST,
        REST,
        REST
      ],

      FullBody3x: [
        ["Hip Thrust 5x8", "Back Squat 4x8", "Bulgarian Split Squats 3x10", "Cable Kickbacks 3x15", "Hip Abductions 4x15", "Calf Raises 4x12"],
        REST,
        ["Romanian Deadlift 4x10", "Leg Press 4x10", "Hamstring Curls 3x12", "Walking Lunges 3x12", "Cable Kickbacks 3x15", "Hip Abductions 4x15"],
        REST,
        ["Glute Bridge 5x10", "Front Squat 4x10", "Step Ups 3x12", "Leg Extensions 3x15", "Cable Kickbacks 3x15", "Hip Abductions 4x15", "Calf Raises 4x12"],
        REST,
        REST
      ],

      UL: [
        ["Bench Press 4x10", "Pull Ups 4x8", "Overhead Press 3x10", "Cable Rows 3x12", "DB Bicep Curls 3x12", "Tricep Pushdowns 3x12"],
        ["Hip Thrust 5x8", "Back Squat 4x8", "Romanian Deadlift 4x10", "Bulgarian Split Squats 3x10", "Cable Kickbacks 3x15", "Hip Abductions 4x15", "Calf Raises 4x12"],
        REST,
        ["Incline DB Press 4x10", "Lat Pulldowns 4x10", "Cable Rows 3x12", "Lateral Raises 3x15", "Barbell Curls 3x10", "Tricep Extensions 3x12"],
        ["Sumo Deadlift 4x6", "Leg Press 4x10", "Walking Lunges 3x12", "Hamstring Curls 3x12", "Glute Bridge 4x12", "Cable Kickbacks 3x15", "Hip Abductions 4x15"],
        REST,
        REST
      ],

      PPLUP: [
        ["Bench Press 4x10", "Incline DB Press 3x12", "Overhead Press 3x10", "Tricep Pushdowns 3x12", "Lateral Raises 3x15"],
        ["Pull Ups 4x8", "Cable Rows 4x12", "Lat Pulldowns 3x12", "Barbell Curls 3x10", "Hammer Curls 3x12", "Rear Delt Fly 3x15"],
        ["Hip Thrust 5x8", "Back Squat 4x8", "Bulgarian Split Squats 3x10", "Cable Kickbacks 3x15", "Hip Abductions 4x15", "Calf Raises 4x12"],
        REST,
        ["Incline Bench Press 4x10", "DB Bench Press 3x12", "Cable Fly 3x15", "Tricep Extensions 3x12", "Lateral Raises 3x15"],
        ["Romanian Deadlift 4x10", "Leg Press 4x10", "Walking Lunges 3x12", "Hamstring Curls 3x12", "Glute Bridge 4x12", "Cable Kickbacks 3x15", "Hip Abductions 4x15"],
        REST
      ],

      PPL: [
        ["Bench Press 4x10", "Incline DB Press 3x12", "Overhead Press 3x10", "Tricep Pushdowns 3x12", "Lateral Raises 3x15"],
        ["Pull Ups 4x8", "Cable Rows 4x12", "Lat Pulldowns 3x12", "Barbell Curls 3x10", "Hammer Curls 3x12", "Rear Delt Fly 3x15"],
        ["Hip Thrust 5x8", "Back Squat 4x8", "Bulgarian Split Squats 3x10", "Cable Kickbacks 3x15", "Hip Abductions 4x15", "Calf Raises 4x12"],
        ["Incline Bench Press 4x10", "DB Bench Press 3x12", "Cable Fly 3x15", "Tricep Extensions 3x12", "Lateral Raises 3x15"],
        ["Sumo Deadlift 4x6", "Leg Press 4x10", "Walking Lunges 3x12", "Hamstring Curls 3x12", "Glute Bridge 4x12", "Cable Kickbacks 3x15", "Hip Abductions 4x15"],
        ["Glute Bridge 5x10", "Front Squat 4x10", "Step Ups 3x12", "Leg Extensions 3x15", "Cable Kickbacks 3x15", "Hip Abductions 4x15", "Calf Raises 4x12"],
        REST
      ]
    }),


    powerlifting: plan("Powerlifting Focus", {
      FullBody2x: [
        ["Back Squat 5x5", "Bench Press 5x5", "Deadlift 3x5", "Barbell Rows 4x8", "Tricep Extensions 3x12", "Plank 3x60s"],
        REST,
        REST,
        ["Front Squat 4x6", "Incline Bench Press 4x6", "Romanian Deadlift 4x8", "Pull Ups 4x8", "Barbell Curls 3x10", "Hanging Leg Raises 3x12"],
        REST,
        REST,
        REST
      ],

      FullBody3x: [
        ["Back Squat 5x5", "Bench Press 5x5", "Barbell Rows 4x8", "Leg Extensions 3x12", "Tricep Pushdowns 3x12", "Plank 3x60s"],
        REST,
        ["Deadlift 4x4", "Overhead Press 4x6", "Pull Ups 4x8", "Romanian Deadlift 3x8", "Barbell Curls 3x10", "Hanging Leg Raises 3x12"],
        REST,
        ["Front Squat 4x6", "Incline Bench Press 4x6", "Cable Rows 3x10", "Hamstring Curls 3x12", "Lateral Raises 3x15", "Calf Raises 4x12"],
        REST,
        REST
      ],

      UL: [
        ["Back Squat 5x5", "Bench Press 5x5", "Barbell Rows 4x8", "Tricep Pushdowns 3x12"],
        ["Deadlift 4x4", "Romanian Deadlift 3x8", "Leg Press 3x10", "Hamstring Curls 3x12", "Calf Raises 4x12"],
        REST,
        ["Front Squat 4x6", "Incline Bench Press 4x6", "Pull Ups 4x8", "Overhead Press 3x8", "Barbell Curls 3x10"],
        ["Deadlift 3x3", "Back Squat 3x5", "Leg Extensions 3x12", "Hamstring Curls 3x12", "Plank 3x60s"],
        REST,
        REST
      ],

      PPLUP: [
        ["Bench Press 5x5", "Overhead Press 4x6", "Incline DB Press 3x10", "Tricep Extensions 3x12"],
        ["Deadlift 4x4", "Pull Ups 4x8", "Barbell Rows 4x8", "Barbell Curls 3x10"],
        ["Back Squat 5x5", "Romanian Deadlift 4x8", "Leg Press 3x10", "Calf Raises 4x12"],
        REST,
        ["Bench Press 4x4", "Incline Bench Press 4x6", "DB Bench Press 3x10", "Tricep Pushdowns 3x12"],
        ["Barbell Rows 4x6", "Lat Pulldowns 4x10", "Pull Ups 3x8", "Hammer Curls 3x12", "Hanging Leg Raises 3x12"],
        REST
      ],

      PPL: [
        ["Bench Press 5x5", "Overhead Press 4x6", "Incline Bench Press 4x6", "Tricep Extensions 3x12"],
        ["Deadlift 4x4", "Barbell Rows 4x8", "Pull Ups 4x8", "Barbell Curls 3x10"],
        ["Back Squat 5x5", "Romanian Deadlift 4x8", "Leg Press 3x10", "Calf Raises 4x12"],
        ["Bench Press 4x4", "Close Grip Bench Press 4x6", "Incline DB Press 3x10", "Tricep Pushdowns 3x12"],
        ["Barbell Rows 4x6", "Lat Pulldowns 4x10", "Cable Rows 3x10", "Hammer Curls 3x12", "Hanging Leg Raises 3x12"],
        ["Front Squat 4x6", "Deadlift 3x3", "Leg Extensions 3x12", "Hamstring Curls 3x12", "Plank 3x60s"],
        REST
      ]
    }),


    calisthenics: plan("Calisthenics Focus", {
      FullBody2x: [
        ["Pull Ups 5x5", "Push Ups 4x15", "Bodyweight Squats 4x20", "Dips 4x8", "Inverted Rows 4x12", "Walking Lunges 3x16", "Hanging Leg Raises 3x12", "Plank 3x60s"],
        REST,
        REST,
        ["Chin Ups 4x8", "Pike Push Ups 4x10", "Bulgarian Split Squats 4x10", "Diamond Push Ups 3x12", "Inverted Rows 4x12", "Hip Thrusts 3x15", "Russian Twists 3x20", "Side Plank 3x45s"],
        REST,
        REST,
        REST
      ],

      FullBody3x: [
        ["Pull Ups 5x5", "Push Ups 4x15", "Bulgarian Split Squats 4x10", "Dips 4x8", "Hanging Knee Raises 3x15", "Plank 3x60s"],
        REST,
        ["Chin Ups 4x8", "Pike Push Ups 4x10", "Inverted Rows 4x12", "Walking Lunges 3x16", "Reverse Crunches 3x15", "Side Plank 3x45s"],
        REST,
        ["Neutral Grip Pull Ups 4x6", "Diamond Push Ups 4x12", "Bodyweight Squats 4x20", "Glute Bridges 4x15", "Hanging Leg Raises 3x12", "Mountain Climbers 3x45s"],
        REST,
        REST
      ],

      UL: [
        ["Pull Ups 5x5", "Dips 4x8", "Inverted Rows 4x12", "Push Ups 4x15", "Pike Push Ups 3x10", "Hanging Leg Raises 3x12"],
        ["Bulgarian Split Squats 4x10", "Bodyweight Squats 4x20", "Walking Lunges 3x16", "Single Leg Calf Raises 4x15", "Glute Bridges 4x15", "Plank 3x60s"],
        REST,
        ["Chin Ups 4x8", "Diamond Push Ups 4x12", "Inverted Rows 4x12", "Decline Push Ups 3x12", "Scapular Pull Ups 3x10", "Russian Twists 3x20"],
        ["Step Ups 4x12", "Cossack Squats 3x10", "Reverse Lunges 3x16", "Single Leg RDL 3x10", "Hanging Knee Raises 3x15", "Side Plank 3x45s"],
        REST,
        REST
      ],

      PPLUP: [
        ["Dips 5x5", "Push Ups 4x15", "Pike Push Ups 4x10", "Diamond Push Ups 3x12", "Decline Push Ups 3x12", "Plank 3x60s"],
        ["Pull Ups 5x5", "Chin Ups 4x8", "Inverted Rows 4x12", "Scapular Pull Ups 3x10", "Face Pulls 3x15", "Hanging Leg Raises 3x12"],
        ["Bulgarian Split Squats 4x10", "Walking Lunges 3x16", "Bodyweight Squats 4x20", "Step Ups 3x12", "Single Leg Calf Raises 4x15", "Reverse Crunches 3x15"],
        REST,
        ["Dips 4x8", "Pike Push Ups 4x10", "Push Ups 4x15", "Diamond Push Ups 3x12", "Tricep Bench Dips 3x15", "Russian Twists 3x20"],
        ["Pull Ups 4x6", "Inverted Rows 4x12", "Chin Ups 3x10", "Scapular Pull Ups 3x10", "Hanging Knee Raises 3x15", "Side Plank 3x45s"],
        REST
      ],

      PPL: [
        ["Dips 5x5", "Push Ups 4x15", "Pike Push Ups 4x10", "Diamond Push Ups 3x12", "Decline Push Ups 3x12", "Plank 3x60s"],
        ["Pull Ups 5x5", "Chin Ups 4x8", "Inverted Rows 4x12", "Scapular Pull Ups 3x10", "Face Pulls 3x15", "Hanging Leg Raises 3x12"],
        ["Bulgarian Split Squats 4x10", "Walking Lunges 3x16", "Bodyweight Squats 4x20", "Step Ups 3x12", "Single Leg Calf Raises 4x15", "Reverse Crunches 3x15"],
        ["Dips 4x8", "Decline Push Ups 4x12", "Pike Push Ups 4x10", "Diamond Push Ups 3x12", "Tricep Bench Dips 3x15", "Russian Twists 3x20"],
        ["Pull Ups 4x6", "Inverted Rows 4x12", "Chin Ups 3x10", "Scapular Pull Ups 3x10", "Hanging Knee Raises 3x15", "Side Plank 3x45s"],
        ["Jump Squats 4x12", "Cossack Squats 3x10", "Reverse Lunges 3x16", "Single Leg RDL 3x10", "Glute Bridges 4x15", "Mountain Climbers 3x45s"],
        REST
      ]
    })

  };

  return workoutPlans[focus];
}
