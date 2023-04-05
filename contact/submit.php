<?php
// check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // get form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // validate form data
  if (empty($name) || empty($email) || empty($message)) {
    echo "Please fill in all fields";
    exit;
  }
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format";
    exit;
  }

  // connect to database
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "contact";

  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // insert data into database
  $sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";
  if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
  } else {
    echo "Error inserting data: " . $conn->error;
  }

  // close database connection
  $conn->close();

  // send email
  $to = "your_email@example.com";
  $subject = "New contact form submission";
  $message = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully";
  } else {
    echo "Error sending email";
  }
}
?>
