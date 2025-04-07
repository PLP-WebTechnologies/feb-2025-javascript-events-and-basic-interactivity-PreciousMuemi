const form = document.getElementById("login-form");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  msg.classList.remove("hidden");

  // Fake login check for demo purposes
  if (email === "muemiprecious@gmail.com" && password === "blastmode") {
    msg.textContent = "🔐 Access granted. Redirecting...";
    msg.style.color = "#66ffcc";
    setTimeout(() => {
      msg.textContent = "🚀 Welcome to the dashboard, Muemi!";
    }, 1500);
  } else {
    msg.textContent = "❌ Invalid credentials. Try again.";
    msg.style.color = "#ff6b6b";
  }

  // Clear form after 3.5s
  setTimeout(() => {
    msg.classList.add("hidden");
    form.reset();
  }, 3500);
});
