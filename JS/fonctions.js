est_mail_vailde(ch)
{
    var test=true;
    if((ch.indexOf("@") < 1 )||((ch.indexOf("@")==(ch.length)-1)) )
    {
     test= false;
    }
    else
    {
     var username = ch.substr(0,ch.indexOf('@'));
     var domain =ch.substr(ch.lastIndexOf('.')+1,(ch.length)-(ch.lastIndexOf('.'))+1);
     alert(domain);
     if(domain.length<2)
     {
         test= false;
     }
     else
     {
         if((username.length<10)||(username.length>50))
         {
             test= false;
         }

     }

    }

 return(test);
}
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
    else if(!est_mail_vailde(email))
        {
            alert("Veuillez vérifier SVP votre Email");
        }
        else if(now()-date<18)
            {
                alert("vous devez avoir 18 ans");
            }

}