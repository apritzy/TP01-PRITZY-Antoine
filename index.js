//check password and email

function Verification() {
    // Récupére la valeur email
    var Email = document.getElementById('idEmail').value;
    var password = document.getElementById("password").value;

    // Contrôle sur l'email
    if (Email == '') {
        alert('Vous devez compléter votre adresse email');
        document.getElementById('idEmail').style.backgroundColor = "red";
        return false;
    }
    else {
        document.getElementById('idEmail').style.backgroundColor = "#9C6";
    }

    if (password == "") {
        document.getElementById("password").innerHTML = "Fill the password";
        return false;
    }
    else {
        document.getElementById('password').style.backgroundColor = "#9C6";
    }
}
