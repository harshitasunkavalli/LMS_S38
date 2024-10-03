document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");

    // Handle signup
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Save the user data to local storage
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            alert("Sign Up successful! You can now log in.");
            window.location.href = "login.html"; // Redirect to login
        });
    }

    // Handle login
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            // Get stored user data from local storage
            const storedEmail = localStorage.getItem("email");
            const storedPassword = localStorage.getItem("password");

            // Check credentials
            if (email === storedEmail && password === storedPassword) {
                window.location.href = "student-dashboard.html"; // Redirect to student dashboard
            } else {
                alert("Invalid credentials, please try again.");
            }
        });
    }
});
