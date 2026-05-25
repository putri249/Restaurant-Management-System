// TOGGLE PASSWORD
const togglePassword =document.getElementById("togglePassword");
const password = document.getElementById("password");
togglePassword.addEventListener("click", function(){
    if(password.type === "password"){
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }else{
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});

const adminEmail = "admin@gmail.com";
const adminPassword = "admin123";

// LOGIN ROLE
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const email =
        document.querySelector('input[type="email"]').value;
    const passwordInput =
        document.getElementById("password").value;
    const role =
        document.querySelector('input[name="role"]:checked').value;
    // LOGIN ADMIN
    if(role === "admin"){
        if(
            email === adminEmail && passwordInput === adminPassword
        ){
            window.location.href = "admin.html";
        }else{
            alert("Email atau Password admin salah!");
        }
    }else{
        window.location.href = "dashboard.html";
    }
});

const registerText = document.getElementById("registerText");
const roleOptions = document.querySelectorAll('input[name="role"]');
roleOptions.forEach(radio => {
    radio.addEventListener("change", function() {
        if (this.value === "admin") {
            registerText.style.display = "none";  // Sembunyikan register kalau pilih admin
        } else {
            registerText.style.display = "block"; // Munculkan lagi kalau pilih penjual
        }
    });
});