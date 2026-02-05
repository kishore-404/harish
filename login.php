<?php
require('includes/db.php');
session_start();

if (isset($_POST['username'])) {
    $username = stripslashes($_REQUEST['username']);
    $password = $_REQUEST['password'];

    $query = "SELECT * FROM `users` WHERE username='$username'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);

    if ($row && password_verify($password, $row['password'])) {
        $_SESSION['user_id'] = $row['id'];
        $_SESSION['username'] = $username;
        header("Location: index.php");
    } else {
        echo "<div class='alert alert-danger text-center'>Incorrect Username/Password.</div>";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="d-flex align-items-center justify-content-center" style="height: 100vh;">
    <div class="card p-4" style="width: 300px;">
        <h3 class="text-center">Login</h3>
        <form method="post">
            <input type="text" class="form-control mb-2" name="username" placeholder="Username" required />
            <input type="password" class="form-control mb-2" name="password" placeholder="Password" required />
            <button type="submit" class="btn btn-success w-100">Login</button>
        </form>
        <p class="mt-2 text-center"><a href="register.php">Register here</a></p>
    </div>
</body>
</html>