const profileForm = document.querySelector(".profile-form");
const passwordInput = document.getElementById("password");
const eyeBtn = document.querySelector(".eye-btn");
const eyeIcon = eyeBtn.querySelector("i");
const changePhotoBtn = document.querySelector(".change-photo-btn");
const changePasswordBtn = document.querySelector(".change-password-btn");
const logoutBtn = document.querySelector(".logout-btn");

/* SHOW / HIDE PASSWORD */
eyeBtn.addEventListener("click", function(){
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
    
    else{
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
});

/* UPDATE PROFILE */
profileForm.addEventListener("submit", function(e){
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const password = passwordInput.value;

    /* VALIDASI */
    if(nama === "" || email === "" || password === ""){
        alert("Semua data harus diisi!");
        return;
    }

    /* SIMULASI UPDATE */
    alert("Profil berhasil diperbarui!");
});

/* CHANGE PHOTO */
changePhotoBtn.addEventListener("click", function(){
    alert("Fitur ubah foto profil");
});

/* CHANGE PASSWORD */
changePasswordBtn.addEventListener("click", function(){
    alert("Menu ganti kata sandi");
});

/* LOGOUT */
logoutBtn.addEventListener("click", function(){
    const confirmLogout = confirm("Yakin ingin logout?");
    if(confirmLogout){
        alert("Berhasil logout");
    }
});