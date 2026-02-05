<?php
// 1. Include the database connection and the session security check
require('includes/db.php');
include("includes/auth_session.php");

// 2. Handle the Form Submission (Create Operation)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $food_name = mysqli_real_escape_string($conn, $_POST['food_name']);
    $calories  = (int)$_POST['calories'];
    $protein   = (int)$_POST['protein'];
    $log_date  = $_POST['log_date'];

    // Corrected bind_param: "isiis" (5 chars for 5 variables)
    $stmt = $conn->prepare("INSERT INTO food_logs (user_id, food_name, calories, protein, log_date) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("isiis", $user_id, $food_name, $calories, $protein, $log_date);
    
    if ($stmt->execute()) {
        $message = "Meal logged successfully!";
        $class = "alert-success";
    } else {
        $message = "Error: " . $conn->error;
        $class = "alert-danger";
    }
    $stmt->close();
}

// 3. Include the Navigation Header
include('includes/header.php');
?>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card shadow">
                <div class="card-header bg-success text-white">
                    <h4 class="mb-0">🍎 Log New Meal</h4>
                </div>
                <div class="card-body">
                    
                    <?php if (isset($message)): ?>
                        <div class="alert <?php echo $class; ?> alert-dismissible fade show" role="alert">
                            <?php echo $message; ?>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    <?php endif; ?>

                    <form action="add_food.php" method="POST">
                        <div class="mb-3">
                            <label for="food_name" class="form-label">Food/Meal Name</label>
                            <input type="text" name="food_name" id="food_name" class="form-control" placeholder="e.g. Grilled Chicken & Rice" required>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="calories" class="form-label">Calories (kcal)</label>
                                <input type="number" name="calories" id="calories" class="form-control" min="0" placeholder="0" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="protein" class="form-label">Protein (grams)</label>
                                <input type="number" name="protein" id="protein" class="form-control" min="0" placeholder="0" required>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="log_date" class="form-label">Date</label>
                            <input type="date" name="log_date" id="log_date" class="form-control" value="<?php echo date('Y-m-d'); ?>" required>
                        </div>

                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-success">Save Entry</button>
                            <a href="index.php" class="btn btn-outline-secondary">Back to Dashboard</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<?php 
// 4. Close database connection if needed and include footer
$conn->close();
// include('includes/footer.php'); // Uncomment if you created a footer file
?>