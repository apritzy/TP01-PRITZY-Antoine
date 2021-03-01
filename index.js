function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function Verification() {
    // Récupérer lavaleur des champs nom et email
    var Nom = document.getElementById('idNom').value;
    var Email = document.getElementById('idEmail').value;

    // Contrôle sur le nom
    if (Nom == '') {
        alert('Vous devez compléter votre nom !');
        document.getElementById('idNom').style.backgroundColor = "red";
        document.getElementById('idNom').style.color = "#FFF";

        // Permet de bloquer l'envoi du formulaire
        return false;
    }
    else {
        document.getElementById('idNom').style.backgroundColor = "#9C6";
    }

    // Contrôle sur l'email
    if (Email == '') {
        alert('Vous devez compléter votre adresse email');
        document.getElementById('idEmail').style.backgroundColor = "red";
        document.getElementById('idEmail').style.color = "#FFF";
        return false;
    }

    else {
        document.getElementById('idEmail').style.backgroundColor = "#9C6";
    }
}