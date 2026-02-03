// contact.js

document.addEventListener("DOMContentLoaded", () => {
    // Initialize EmailJS with your Public Key
    emailjs.init("HLfelmdrjPvrf21XG"); // Replace with your EmailJS public key
  
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent page reload
  
      emailjs.sendForm("service_1j99pli", "template_wk3pvi6", this)
        .then(() => {
          alert("Message sent successfully!");
          form.reset(); // Clear form after success
        })
        .catch((error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        });
    });
  });
  