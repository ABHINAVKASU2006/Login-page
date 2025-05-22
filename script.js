// Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("regName").value.trim();
    const age = document.getElementById("regAge").value.trim();
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const msg = document.getElementById("registerMsg");

    if (localStorage.getItem(username)) {
      msg.textContent = "Username already exists.";
      return;
    }

    const userData = {
      name,
      age,
      username,
      password
    };

    localStorage.setItem(username, JSON.stringify(userData));
    msg.style.color = "green";
    msg.textContent = "Registered successfully! You can now log in.";
    registerForm.reset();
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const msg = document.getElementById("loginMsg");

    const storedData = localStorage.getItem(username);

    if (!storedData) {
      msg.textContent = "User not found. Please register.";
      return;
    }

    const user = JSON.parse(storedData);

    if (user.password === password) {
      msg.style.color = "green";
      msg.textContent = `Welcome, ${user.name}! Login successful.`;
      // Redirect or continue here
      // window.location.href = "dashboard.html";
    } else {
      msg.style.color = "red";
      msg.textContent = "Incorrect password.";
    }
  });
}
