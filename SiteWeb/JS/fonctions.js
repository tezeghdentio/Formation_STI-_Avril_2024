
function ajout()
{
    np=document.getElementById("znp").value;
    pos=np.indexOf(" ");
    //ch.substr(pos,nb_caracteres); retourne nb_caracteres de la chaine ch à partir de la position pos
    nom=np.substr(0,pos);
    prenom=np.substr(pos+1,np.length);
    np=prenom+" "+nom;
    email=document.getElementById("zadr").value;
    var taille = document.getElementById("carnet").options.length;
    var exist = false;

    if (taille != 0)
    {
        i=0;
        while((i<taille)&&(exist==false))
        {
            elt= document.getElementById("carnet").options[i].text;
   
            if (elt == np)
            {
                exist = true;
                alert("contact déjà existant");
            }
            i++;

        }
    }
    if (!exist)
    {
        nelt= new Option(np, email);
        document.getElementById("carnet").options[taille] = nelt;
    }
}
//*****************************************
function supprimer()
{
    var sel=document.getElementById("carnet").selectedIndex;
    if (sel == -1)
        alert("veuillez sélectionner un élément SVP");
    else
    {
        document.getElementById("carnet").options[sel] = null;
    }
}
//*****************************************
function adresse()
{
   
    var sel=document.getElementById("carnet").selectedIndex;
    if (sel == -1)
        alert("veuillez sélectionner un élément SVP ");
    else
    {
       
        nom=document.getElementById("carnet").options[sel].text;
        email=document.getElementById("carnet").options[sel].value;
        alert("L'adresse mail de " + nom + " est :"+email);
    }
}
function est_mail_vailde(ch)
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
   /* d=new Date();
   // d1=date_nais.getFullYear();
    alert(date_nais);
    alert(d.getFullYear()+'-'+d.getMonth());
    heure=document.getElementById("heure").value;
    alert(Date());*/
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
        else if(Date()-date<18)
            {
                alert("vous devez avoir 18 ans");
            }

}
