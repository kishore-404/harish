<?php
require('includes/db.php');
if (isset($_POST['username'])) {
    $username = stripslashes($_REQUEST['username']);
    $password = password_hash($_REQUEST['password'], PASSWORD_DEFAULT);
    
    $query = "INSERT into `users` (username, password) VALUES ('$username', '$password')";
    $result = mysqli_query($conn, $query);
    if ($result) {
        header("Location: login.php");
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="d-flex align-items-center justify-content-center" style="height: 100vh;">
    <div class="card p-4" style="width: 300px;">
        <h3 class="text-center">Register</h3>
        <form method="post">
            <input type="text" class="form-control mb-2" name="username" placeholder="Username" required />
            <input type="password" class="form-control mb-2" name="password" placeholder="Password" required />
            <button type="submit" class="btn btn-primary w-100">Sign Up</button>
        </form>
        <p class="mt-2 text-center"><a href="login.php">Login here</a></p>
    </div>
</body>
</html>