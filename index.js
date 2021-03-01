//check passwords match

function validationpassword() {
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    if (password != confirmpassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

function validate() {
    if (document.form.value != "") {   
        return true;
    }
    else {
        alert("non validé");
        return false;
    }
}


