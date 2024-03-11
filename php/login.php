<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    if (empty($username) || empty($email) || empty($password)) {
        echo "<p class='errlogin'><span class='errlogin1'>Error:</span> Please fill out all fields</p>";
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<p class='errlogin'><span class='errlogin1'>Error:</span> Invalid email format</p>";
    } else {
        // Continue with the form submission logic here
    }
}
?>