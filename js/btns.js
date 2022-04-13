
function showPhoneNumber(){
    var x = document.getElementById("phoneNumber");
    var btn = document.getElementById("phoneBtn");
    if (x.style.display === "none") {
      x.style.display = "block";
      btn.classList.replace("fa-eye","fa-eye-slash")
    } else {
      x.style.display = "none";
      btn.classList.replace("fa-eye-slash","fa-eye")
    }
}