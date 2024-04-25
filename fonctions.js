function verif()
{
    //recuperation des valeurs des variable du formulaire 
    login=document.getElementById("login").value;
    password=document.getElementById("password").value;
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    date_nais=document.getElementById("date_naiss").value;
    heure=document.getElementById("heure").value;
    mail=document.getElementById("mail").value;
    i=document.getElementById("pays").selectedIndex;
    remarques=document.getElementById("remarques").value;
    
    if((login=="")||(password=="")||
    (nom.length==0)||(prenom.length==0)||
    (date_nais=="")|(heure=="")||(mail=="")||(remarques=="")||
    (document.getElementById("homme").checked==false)||(!document.getElementById("femme").checked))
    {
        alert("vérifier les champs obligatoires");
    }

}