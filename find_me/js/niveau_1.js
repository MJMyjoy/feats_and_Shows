let correct = ["Bienvenue", "dans", "l'univers", "des", "termes", "perdus", "et",
"des", "erreurs", "enfuies."];

let le_texte = ["Bienvenue ", "dans ", "l'univers ", "des ", "termes ", "perdus ", "et ",
"des ", "erreurs ", "enfuies. "];

let erreurs = ["Bienevnue", "dnas", "l'unviers", "dés", "ternes", "pedrus", "est",
"dees", "erruers", "enfiues."];


let x = Math.floor(Math.random() * correct.length);

// J'ajoute <em> au terme avec erreur
le_texte[x] = "<em>"+erreurs[x]+"</em> ";



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



// Affectation du texte a apparaitre a l'ecran
for(let i=0; i<le_texte.length; i++)
{
    texte.innerHTML += le_texte[i];
}


okay.onclick = function()
{

    // Recuperation du texte dans le nouveau tableau
    votre_texte = texte.textContent.split(' ');
    

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
        btn_result.href="niveau_2.html";
        btn_result.innerHTML="Niveau 2";
    }
    else
    {
        texte_result.innerHTML = "Mais non! Vous devez juste corriger l'orthographe du terme en <em>rose</em>.<br>L'avez-vous remarqué?";
    } 
}
