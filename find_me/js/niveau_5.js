let correct = ["Bonjour ", "monsieur, ", "madame ", "ou ", "mademoiselle ", "...<br><br> ",
"Effacez ", "juste ", "les ", "trois ", "points ", "et ", "mettez ", "votre ",
"prénom ", "(sans ", "espace) ", "à ", "la ", "place.<br> ",
"Cela ", "me ", "fait ", "énormément ", "plaisir ", "de ", "vous ", "retrouver ",
"ici ", "et ", "j'espère ", "que ", "vous ", "aussi.<br><br> ",
"Je ", "suis ", "tellement ", "content ", "à ", "tel ", "point ", "que ", "j'ai ",
"rédigé ", "assez ", "rapidement ", "et ", "je ", "crois ", "bien ", "que ", "l'orthographe ",
"de ", "l'un ", "des ", "mots ", "dans ", "ce ", "texte ", "m'a ", "échappée!<br> ",
"Vous ", "l'avez ", "retrouvé? ", "Alors ", "aidez-moi ", "à ", "le ", "corriger ", "s'il ",
"vous ", "plaît, ", "puis ", "cliquez ", "sur ", "Okay. "];

let le_texte = ["Bonjour ", "monsieur, ", "madame ", "ou ", "mademoiselle ", "...<br><br> ",
"Effacez ", "juste ", "les ", "trois ", "points ", "et ", "mettez ", "votre ",
"prénom ", "(sans ", "espace) ", "à ", "la ", "place.<br> ",
"Cela ", "me ", "fait ", "énormément ", "plaisir ", "de ", "vous ", "retrouver ",
"ici ", "et ", "j'espère ", "que ", "vous ", "aussi.<br><br> ",
"Je ", "suis ", "tellement ", "content ", "à ", "tel ", "point ", "que ", "j'ai ",
"rédigé ", "assez ", "rapidement ", "et ", "je ", "crois ", "bien ", "que ", "l'orthographe ",
"de ", "l'un ", "des ", "mots ", "dans ", "ce ", "texte ", "m'a ", "échappée!<br> ",
"Vous ", "l'avez ", "retrouvé? ", "Alors ", "aidez-moi ", "à ", "le ", "corriger ", "s'il ",
"vous ", "plaît, ", "puis ", "cliquez ", "sur ", "Okay. "];

let erreurs = ["Bonjuor ", "monsiuer, ", "madamme ", "uo ", "mademioselle ", "...<br><br> ",
"Efacez ", "jsute ", "lés ", "trios ", "pionts ", "ét ", "metez ", "voter ",
"préonm ", "(sains ", "epace) ", "a ", "là ", "places.<br> ",
"Celà ", "mes ", "fiat ", "énormmément ", "pliasir ", "dé ", "vuos ", "retrovuer ",
"uci ", "ét ", "j'espèrre ", "qeu ", "vuos ", "ausssi.<br><br> ",
"J'ai ", "sius ", "telement ", "conttent ", "a ", "telle ", "piont ", "qeu ", "je ",
"rédigais ", "asséz ", "rapidemment ", "ét ", "j'ai ", "crios ", "bein ", "qeu ", "l'orhtographe ",
"dé ", "l'uns ", "de ", "mot ", "dams ", "ces ", "tetxe ", "m'as ", "échapée!<br> ",
"Vuos ", "l'aveez ", "retruové? ", "Alros ", "aidé-moi ", "a ", "lé ", "coriger ", "s'li ",
"vuos ", "plaie, ", "pius ", "cliquer ", "sùr ", "Okey. "];

let x = Math.floor(Math.random() * correct.length);

le_texte[x] = erreurs[x];


let game = document.getElementById("game");
let texte = document.getElementById("texte");
let okay = document.getElementById("okay");

let resultat = document.getElementById("resultat");
let texte_result = document.getElementById("texte_result");
let btn_result = document.getElementById("btn_result");

let timeout = document.getElementById("timeout");
let lose_result = document.getElementById("lose_result");

let votre_texte = [];
let verificateur = true;


// Compte a rebours
let fin = setTimeout(function(){
    game.style.display = "none";
    timeout.style.display = "block";
    if(x===5)
        {
            lose_result.innerHTML = "Pourtant, mon texte était déjà bien correct!<br> Vous n’aviez qu’à cliquer sur Okay !";
        }
    else
        {
            lose_result.innerHTML =  "J'avais juste écrit <em>"+ erreurs[x] +"</em> au lieu de <em>"+ correct[x] + "</em>";
        } 
}, 90*1000);


// Affectation du texte a apparaitre a l'ecran
for(let i=0; i<le_texte.length; i++)
{
    texte.innerHTML += le_texte[i];
}


okay.onclick = function()
{
    // Arret du compte a rebours
    clearTimeout(fin);

    // Recuperation du texte dans le nouveau tableau
    votre_texte = texte.innerHTML.split(' ');
    for (let i=0; i<votre_texte.length; i++)
    {
        // On rajoute les espace apres chaque mot
        votre_texte[i]+=" ";
    }
    // On efface le nom
    votre_texte[5] = "...<br><br> ";

    // Disparition du bouton
    okay.style.transform = "scale(2)";
    okay.style.opacity = "0";
    okay.style.pointerEvents = "none";

    // Texte non editable et apparition du resultat
    texte.contentEditable = "false";
    resultat.style.transform = "scale(1)";

    // Verification du nouveau tableau
    for(let i=0; i<correct.length; i++)
    {
        if (votre_texte[i]!==correct[i])
        verificateur=false;
    }

    // RESULTAT
    if (verificateur)
    {
        texte_result.style.animation = "danse 2s both ease-in-out infinite";
        texte_result.style.color = "yellow";
        texte_result.innerHTML = "Félicitations!!! <br>Vous avez corrigé tous les textes du jeu avec succès! <br>Vous êtes vraiment génial! <br>Voulez-vous encore jouer? <br>";
        // On adapte le lien
        btn_result.href="niveau_1.html";
        btn_result.innerHTML="Reprendre";
    }
    else
    {
        if(x===5)
        {
            texte_result.innerHTML = "Mais non! Mon texte était déjà bien correct!<br> Vous vous êtes aussi trompé?<br> Je ne suis donc pas le seul à être tellement joyeux hein!<br>";
        }
        else
        {
            texte_result.innerHTML = "Mais non! J'ai juste écrit <em>"+ erreurs[x] +"</em> au lieu de <em>"+ correct[x] + "</em><br> Vous vous êtes aussi trompé?<br> Je ne suis donc pas le seul à être tellement joyeux hein!";
        }
    } 
}


