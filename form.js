document.addEventListener("DOMContentLoaded", function() {

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Collect form data
  var formData = new FormData(this);

  // Send form data using fetch
  fetch("https://formsubmit.co/335e91d0709d15406a282c6d8dc418ad", {
    method: "POST",
    body: formData
  })
  .then(function(response) {
    if (response.ok) {
      // Display success message
      alert("Thanks for submitting the form!");

      // Reset the form
      document.getElementById("contactForm").reset();
    } else {
      // Display error message
      alert("An error occurred. Please try again later.");
    }
  })
  .catch(function(error) {
    console.error("Error:", error);
  });
});
});