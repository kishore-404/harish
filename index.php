<?php
require('includes/db.php');
include("includes/auth_session.php");
include('includes/header.php');

// Fetch today's stats
$today = date('Y-m-d');

// Get Workout Count
$w_sql = "SELECT COUNT(*) as count FROM workout_logs WHERE user_id=$user_id AND log_date='$today'";
$w_res = mysqli_query($conn, $w_sql);
$w_data = mysqli_fetch_assoc($w_res);

// Get Total Calories
$f_sql = "SELECT SUM(calories) as total_cal, SUM(protein) as total_prot FROM food_logs WHERE user_id=$user_id AND log_date='$today'";
$f_res = mysqli_query($conn, $f_sql);
$f_data = mysqli_fetch_assoc($f_res);
$calories = $f_data['total_cal'] ? $f_data['total_cal'] : 0;
$protein = $f_data['total_prot'] ? $f_data['total_prot'] : 0;
?>

<div class="row mb-4">
    <div class="col-md-12">
        <h2 class="fw-bold">Welcome back, <?php echo $_SESSION['username']; ?>! 👋</h2>
        <p class="text-muted">Here is your summary for today (<?php echo $today; ?>)</p>
    </div>
</div>

<div class="row text-center mb-4">
    <div class="col-md-4">
        <div class="card p-4 text-white bg-primary">
            <h1><?php echo $w_data['count']; ?></h1>
            <span>Exercises Done</span>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card p-4 text-white bg-success">
            <h1><?php echo $calories; ?></h1>
            <span>Calories Eaten</span>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card p-4 text-white bg-warning">
            <h1><?php echo $protein; ?>g</h1>
            <span>Protein Consumed</span>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6">
        <div class="card p-3">
            <h4>Latest Workouts</h4>
            <ul class="list-group list-group-flush">
                <?php
                $logs = mysqli_query($conn, "SELECT * FROM workout_logs WHERE user_id=$user_id ORDER BY log_date DESC LIMIT 5");
                while($row = mysqli_fetch_assoc($logs)) {
                    echo "<li class='list-group-item'><b>{$row['exercise_name']}</b>: {$row['sets']}x{$row['reps']} ({$row['weight']}kg) <span class='text-muted float-end'>{$row['log_date']}</span></li>";
                }
                ?>
            </ul>
            <a href="add_workout.php" class="btn btn-outline-primary mt-2">Log Workout</a>
        </div>
    </div>
    
    <div class="col-md-6">
        <div class="card p-3">
            <h4>Recent Meals</h4>
            <ul class="list-group list-group-flush">
                <?php
                $foods = mysqli_query($conn, "SELECT * FROM food_logs WHERE user_id=$user_id ORDER BY log_date DESC LIMIT 5");
                while($row = mysqli_fetch_assoc($foods)) {
                    echo "<li class='list-group-item'><b>{$row['food_name']}</b>: {$row['calories']} cal / {$row['protein']}g protein <span class='text-muted float-end'>{$row['log_date']}</span></li>";
                }
                ?>
            </ul>
             <a href="add_food.php" class="btn btn-outline-success mt-2">Log Food</a>
        </div>
    </div>
</div>

</body>
</html>