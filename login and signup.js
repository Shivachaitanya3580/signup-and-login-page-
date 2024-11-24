const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^[A-Za-z]{3,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(){}:"><?~"])[a-zA-Z0-9!@#$%^&*(){}:"><?~"]{8,}$/;

    document.getElementById("signupForm").addEventListener("submit", function(event) {
      event.preventDefault();
      document.getElementById("usernameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("passwordError").textContent = "";
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      let isValid = true;

      if (!usernameRegex.test(username)) {
        document.getElementById("usernameError").textContent = "Username must be at least 3 letters long and contain no numbers.";
        isValid = false;
      }
      if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
      }
      if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be 8 characters long, with 2 lowercase, 2 uppercase, 2 digits, and 2 symbols.";
        isValid = false;
      }

      if (isValid) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Signup Successful!");
        document.getElementById("signupForm").classList.add("hidden");
        document.getElementById("loginForm").classList.remove("hidden");
      }
    });

    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      document.getElementById("loginEmailError").textContent = "";
      document.getElementById("loginPasswordError").textContent = "";
      const loginEmail = document.getElementById("loginEmail").value.trim();
      const loginPassword = document.getElementById("loginPassword").value.trim();
      const storedEmail = localStorage.getItem("userEmail");
      const storedPassword = localStorage.getItem("userPassword");
      let isLoginValid = true;

      if (loginEmail !== storedEmail) {
        document.getElementById("loginEmailError").textContent = "Email not found. Please sign up first.";
        isLoginValid = false;
      }
      if (loginPassword !== storedPassword) {
        document.getElementById("loginPasswordError").textContent = "Incorrect password.";
        isLoginValid = false;
      }

      if (isLoginValid) {
        alert("Login Successful!");
      }
    });
