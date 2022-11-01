let correct = ["Ici ", "la ", "routine ", "est ", "simple:<br> ", "Vous ", "détectez ", "le ",
"terme ", "mal ", "orthographié, ", "vous ", "le ", "corrigez, ", "vous ", "cliquez ", "sur ",
"Okay ", "et ", "le ", "tour ", "est ", "joué!<br><br> ", "Déjà, ", "allez-y. "];

let le_texte = ["Ici ", "la ", "routine ", "est ", "simple:<br> ", "Vous ", "détectez ", "le ",
"terme ", "mal ", "orthographié, ", "vous ", "le ", "corrigez, ", "vous ", "cliquez ", "sur ",
"Okay ", "et ", "le ", "tour ", "est ", "joué!<br><br> ", "Déjà, ", "allez-y. "];

let erreurs = ["Icci ", "là ", "routnie ", "et ", "sinple:<br> ", "Vvous ", "déttectez ", "lle ",
"temre ", "male ", "orthograhpié, ", "vouss ", "lé ", "corigez, ", "voous ", "cliqeuz ", "sir ",
"Okkay ", "eet ", "les ", "tours ", "ést ", "jouée!<br><br> ", "Dégà, ", "alez-y. "];

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
        lose_result.innerHTML =  "J'avais juste écrit <em>"+ erreurs[x] +"</em> au lieu de <em>"+ correct[x] + "</em>";
}, 60*1000);


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
        texte_result.style.color = "pink";
        texte_result.innerHTML = "Félicitations! Le texte est maintenant bien correct!<br>Voulez-vous passer au niveau supérieur?";
        // On adapte le lien
        btn_result.href="niveau_3.html";
        btn_result.innerHTML="Niveau 3";
    }
    else
    {
        texte_result.innerHTML = "Mais non! J'ai juste écrit <em>"+ erreurs[x] +"</em> au lieu de <em>"+ correct[x] + "</em><br> Voulez-vous encore essayer?";
    } 
}


