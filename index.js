//check passwords match

function Validation() {
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    if (password != confirmpassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
