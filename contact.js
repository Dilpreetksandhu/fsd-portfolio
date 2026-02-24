document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("HLfelmdrjPvrf21XG");

  const form = document.getElementById("contact-form");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    // ✅ Email format validation
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return; // stop form submission
    }

    emailjs.sendForm("service_1j99pli", "template_wk3pvi6", this)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      });
  });

  // ✅ Email validation function
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggleBtn.textContent =
      document.body.classList.contains("light") ? "🌙" : "☀️";
  });
}