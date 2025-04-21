// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtVWpLE3MaQr9EHbi8n_wBcLZ9kCjC598",
  authDomain: "edume-1f1c5.firebaseapp.com",
  projectId: "edume-1f1c5",
  storageBucket: "edume-1f1c5.firebasestorage.app",
  messagingSenderId: "219833739404",
  appId: "1:219833739404:web:3d9fb64223112a8fec73a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Login with Email and Password
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "index.html"; // Redirect to index.html after login
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Register New User
document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "index.html"; // Redirect to index.html after login
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Google Sign-In
document.getElementById("google-signin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "index.html"; // Redirect to index.html after login
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Logout
document.getElementById("logout").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.href = "index.html"; // Redirect after Google login
    })
    .catch((error) => {
      alert(error.message);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const loginBtn = document.getElementById("show-login");
  const registerBtn = document.getElementById("show-register");
  const formTitle = document.getElementById("form-title");

  // Toggle to Login Form
  loginBtn.addEventListener("click", () => {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    formTitle.textContent = "Login";
    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
  });

  // Toggle to Register Form
  registerBtn.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    formTitle.textContent = "Register";
    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
  });
});
