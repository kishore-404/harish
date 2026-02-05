<?php
require('includes/db.php');
include("includes/auth_session.php");
include('includes/header.php');
?>

<div class="container py-4">
    <div class="card shadow p-4 mx-auto" style="max-width: 850px;">
        <h1 class="text-center mb-4">Simple Fitness Plan Generator ✅</h1>
        
        <form id="myForm">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label class="form-label fw-bold">Enter your age:</label>
                    <input type="number" id="userInputAge" class="form-control" min="18" step="1" placeholder="e.g. 25" required />
                </div>
                <div class="col-md-6 mb-3">
                    <label class="form-label fw-bold">Select your gender:</label>
                    <select id="userInputGender" class="form-select" required>
                        <option value="Prefer not to say" selected>Prefer not to say</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label class="form-label fw-bold">Height (feet):</label>
                    <input type="number" id="userInputFeet" class="form-control" min="0" placeholder="feet" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label class="form-label fw-bold">Height (inches):</label>
                    <input type="number" id="userInputInches" class="form-control" min="0" placeholder="inches" required>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label class="form-label fw-bold">Current weight (lbs):</label>
                    <input type="number" id="userInputCurrentWeight" class="form-control" placeholder="weight (lbs)" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label class="form-label fw-bold">Are you trying to:</label>
                    <select id="goalWeight" class="form-select" required>
                        <option value="Maintain" selected>Maintain weight</option>
                        <option value="Gain">Gain weight</option>
                        <option value="Lose">Lose weight</option>
                    </select>
                </div>
            </div>

            <hr class="my-4">

            <div class="mb-3">
                <label class="form-label fw-bold">Primary resistance training focus:</label>
                <select id="liftingGoal" class="form-select" required>
                    <option value="noLifting" selected>No primary resistance training focus</option>
                    <option value="leanFocus">Lean Muscle & Definition</option>
                    <option value="bodybuilding">Bodybuilding: Max muscle mass</option>
                    <option value="gluteFocus">Glute & Lower Body Focus</option>
                    <option value="powerlifting">Powerlifting: Maximize S/B/D</option>
                    <option value="calisthenics">Calisthenics: Bodyweight strength</option>
                    <option value="customPrimary">Custom Routine</option>
                </select>
            </div>

            <div class="mb-3">
                <label class="form-label fw-bold">Days per week you want to train:</label>
                <select id="split" class="form-select" required>
                    <option value="FullBody2x">2 days / week</option>
                    <option value="FullBody3x">3 days / week</option>
                    <option value="UL" selected>4 days / week (Upper/Lower)</option>
                    <option value="PPLUP">5 days / week (PPL + Upper/Lower)</option>
                    <option value="PPL">6 days / week (Push/Pull/Legs)</option>
                </select>
            </div>

            <div class="mb-3">
                <label class="form-label fw-bold">Secondary training focus:</label>
                <select id="cardioGoal" class="form-select" required>
                    <option value="noCardio" selected>No secondary training focus</option>
                    <option value="cardioMobility">Cardio + Mobility</option>
                    <option value="mobility">Mobility & Flexibility</option>
                    <option value="endurance">Cardiovascular Endurance</option>
                    <option value="sprintTraining">Sprint Training</option>
                    <option value="circuitTraining">Circuit Training</option>
                    <option value="customSecondary">Custom Focus</option>
                </select>
            </div>

            <div class="row">
                <div class="col-md-8 mb-3">
                    <label class="form-label fw-bold">Diet plan/preference:</label>
                    <select id="dietType" class="form-select" required>
                        <option value="noDiet" selected>No diet plan/preference</option>
                        <option value="default">Traditional American Diet</option>
                        <option value="lean">Lean Muscle Diet</option>
                        <option value="keto">Keto Diet</option>
                        <option value="vegan">Vegan Diet</option>
                        <option value="mediterranean">Mediterranean Diet</option>
                        <option value="customDiet">Custom Diet Plan</option>
                    </select>
                </div>
                <div class="col-md-4 mb-3">
                    <label class="form-label fw-bold">Include Recovery?</label>
                    <select id="includeRecovery" class="form-select" required>
                        <option value="yes" selected>Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>

            <button type="submit" id="submitBtn" class="btn btn-primary w-100 btn-lg mt-3">Generate Plan</button>
        </form>

        <div id="output" class="mt-4 p-3 border rounded bg-light" style="display:none;">
            </div>
    </div>
</div>

<footer class="container text-center mt-5 pb-4">
    <p class="text-muted small">
        This tool provides general fitness and nutrition information only and is not medical advice.
    </p>
    <hr class="w-25 mx-auto">
   
</footer>

<script src="src/index.js"></script>
</body>
</html>