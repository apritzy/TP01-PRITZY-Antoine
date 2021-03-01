//check password and email

function Verification() {
    // Récupère la valeur email et password
    var Email = document.getElementById('idEmail').value;
    var idPassword = document.getElementById("idPassword").value;

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
        document.getElementById("idPassword").innerHTML = "Fill the password";
        return false;
    }
    else {
        document.getElementById('idPassword').style.backgroundColor = "#9C6";
    }
}
