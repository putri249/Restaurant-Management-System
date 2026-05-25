const togglePassword =
document.getElementById('togglePassword');

const password =
document.getElementById('password');

let isPasswordVisible = false;
togglePassword.addEventListener('click', () => {
    isPasswordVisible = !isPasswordVisible;
    if(isPasswordVisible){
        password.setAttribute('type', 'text');
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    } else {
        password.setAttribute('type', 'password');
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    }
});

const toggleConfirm =
document.getElementById('toggleConfirm');

const confirmPassword =
document.getElementById('confirmPassword');

let isConfirmVisible = false;
toggleConfirm.addEventListener('click', () => {
    isConfirmVisible = !isConfirmVisible;
    if(isConfirmVisible){
        confirmPassword.setAttribute('type', 'text');
        toggleConfirm.classList.remove('fa-eye');
        toggleConfirm.classList.add('fa-eye-slash');
    } else {
        confirmPassword.setAttribute('type', 'password');
        toggleConfirm.classList.remove('fa-eye-slash');
        toggleConfirm.classList.add('fa-eye');
    }
});

const registerForm =
document.querySelector(".register-form");

registerForm.addEventListener("submit", function(e){
    e.preventDefault();

    if(password.value !== confirmPassword.value){
        alert("Konfirmasi password tidak cocok!");
        return;
    }

    alert("Register berhasil!");
});