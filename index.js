//check passwords match

document.getElementById("formulaire").addEventListener("submit", myFunction);

function validationpassword() {
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    if (password != confirmpassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

