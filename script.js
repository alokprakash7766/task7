// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
      // Get the form and success message elements
      const form = document.getElementById("contactForm");
      const successMessage = document.getElementById("successMessage");

      // Handle form submission
      form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Show the success message
        successMessage.style.display = "block";

        // Optionally, reset the form after submission
        form.reset();

        // Optionally, hide the success message after 5 seconds
        setTimeout(function() {
          successMessage.style.display = "none";
        }, 5000);
      });
    });