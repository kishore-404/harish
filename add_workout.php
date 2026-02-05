<?php
require('includes/db.php');
include("includes/auth_session.php");
include('includes/header.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ex = $_POST['exercise'];
    $sets = $_POST['sets'];
    $reps = $_POST['reps'];
    $weight = $_POST['weight'];

    $stmt = $conn->prepare("INSERT INTO workout_logs (user_id, exercise_name, sets, reps, weight) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("isiii", $user_id, $ex, $sets, $reps, $weight);
    $stmt->execute();
    echo "<div class='alert alert-success'>Workout Logged! <a href='index.php'>Go to Dashboard</a></div>";
}
?>

<div class="card p-4 mx-auto" style="max-width: 600px;">
    <h3>Log Workout</h3>
    <form method="POST">
        <input type="text" name="exercise" class="form-control mb-2" placeholder="Exercise Name (e.g. Bench Press)" required>
        <div class="row mb-2">
            <div class="col"><input type="number" name="sets" class="form-control" placeholder="Sets" required></div>
            <div class="col"><input type="number" name="reps" class="form-control" placeholder="Reps" required></div>
        </div>
        <input type="number" name="weight" class="form-control mb-3" placeholder="Weight (kg)">
        <button type="submit" class="btn btn-primary w-100">Save Log</button>
    </form>
</div>
</body>
</html>