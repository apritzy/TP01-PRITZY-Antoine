//check passwords match

function Validation() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
