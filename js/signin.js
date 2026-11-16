let signInForm = document.getElementById("signInForm");
let welcomeBox = document.getElementById("welcomeBox");
let errorText = document.getElementById("signInError");

function showUser() {
    signInForm.style.display = "none";
    welcomeBox.style.display = "block";
    document.getElementById("welcomeName").textContent = localStorage.getItem("userName");
    document.getElementById("welcomeEmail").textContent = localStorage.getItem("userEmail");
}

function showForm() {
    signInForm.style.display = "block";
    welcomeBox.style.display = "none";
}

if (localStorage.getItem("isLoggedIn") === "true") {
    showUser();
} else {
    showForm();
}

signInForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let password = document.getElementById("userPassword").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]+$/;

    if (name === "" || email === "" || password === "") {
        errorText.textContent = "Please fill in all fields.";
    } else if (!emailPattern.test(email)) {
        errorText.textContent = "Please enter a correct email.";
    } else if (password.length < 6) {
        errorText.textContent = "Password must have at least 6 characters.";
    } else {
        errorText.textContent = "";
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        signInForm.reset();
        showUser();
    }
});

document.getElementById("signOutBtn").addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    showForm();
});
