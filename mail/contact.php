<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(403);
    echo "Access forbidden.";
    exit();
}

// Validate required fields
if (empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Please fill out the form correctly.";
    exit();
}

// Sanitize input data
$name = htmlspecialchars(strip_tags(trim($_POST['name'])));
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$m_subject = htmlspecialchars(strip_tags(trim($_POST['subject'])));
$message = htmlspecialchars(strip_tags(trim($_POST['message'])));

// Set recipient email
$to = "mahmoud.m.yussef@gmail.com"; // Your email

// Construct email headers
$subject = "New Contact Form Submission: $m_subject";
$body = "You have received a new message from your website contact form.\n\n"
      . "Here are the details:\n\n"
      . "Name: $name\n"
      . "Email: $email\n"
      . "Subject: $m_subject\n"
      . "Message:\n$message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n"; // Ensure UTF-8 support

// Send email
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Message sent successfully!";
} else {
    http_response_code(500);
    echo "There was an error sending your message.";
}
?>
