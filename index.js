function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function Verification() {
    // R�cup�re la valeur des champs nom et email
    var Nom = document.getElementById('idNom').value;
    var Email = document.getElementById('idEmail').value;
    var Prenom = document.getElementById('idPrenom').value;

    // Contr�le sur le nom
    if (Nom == '') {
        alert('Vous devez compl�ter votre nom !');
        document.getElementById('idNom').style.backgroundColor = "red";
        return false;    // Permet de bloquer l'envoi du formulaire
    }
    else {
        document.getElementById('idNom').style.backgroundColor = "#9C6";
    }

    // Contr�le sur l'email
    if (Email == '') {
        alert('Vous devez compl�ter votre adresse email');
        document.getElementById('idEmail').style.backgroundColor = "red";
        return false;
    }
    else {
        document.getElementById('idEmail').style.backgroundColor = "#9C6";
    }
    if (Prenom == '') {
        alert('Vous devez compl�ter votre Pr�nom !');
        document.getElementById('idNom').style.backgroundColor = "red";
        return false;    // Permet de bloquer l'envoi du formulaire
    }
    else {
        document.getElementById('idPrenom').style.backgroundColor = "#9C6";
    }
}