let correct = ["Maintenant ", "que ", "vous ", "montez ", "en ", "hauteur, ", "vous ", "pouvez ",
"aussi ", "remplacer ", "les ", "trois ", "points ", "par ", "votre ", "nom ", "sans ", "y ", "mettre ",
"des ", "espaces; ", "même ", "pas ", "un ", "seul ", "espace!<br><br> ",
"Bienvenue ", "... ", "dans ", "l'univers ", "des ", "termes ", "perdus ", "et ", "des ",
"erreurs ", "enfuies.<br> ", "Trouve-moi ", "si ", "tu ", "peux! "];

let le_texte = ["Maintenant ", "que ", "vous ", "montez ", "en ", "hauteur, ", "vous ", "pouvez ",
"aussi ", "remplacer ", "les ", "trois ", "points ", "par ", "votre ", "nom ", "sans ", "y ", "mettre ",
"des ", "espaces; ", "même ", "pas ", "un ", "seul ", "espace!<br><br> ",
"Bienvenue ", "... ", "dans ", "l'univers ", "des ", "termes ", "perdus ", "et ", "des ",
"erreurs ", "enfuies.<br> ", "Trouve-moi ", "si ", "tu ", "peux! "];

let erreurs = ["Miantenant ", "quue ", "vouus ", "nomtez ", "an ", "huateur, ", "voùs ", "pouvee ",
"auci ", "renplacer ", "le ", "toris ", "ponits ", "paar ", "vorte ", "non ", "sams ", "i ", "mettrre ",
"dès ", "esspaces; ", "meme ", "pàs ", "um ", "seule ", "espace!<br><br> ",
"Bienveneu ", "... ", "bans ", "l'uinvers ", "bes ", "terms ", "perdue ", "ét ", "de ",
"erreur ", "enfuis.<br> ", "Trouves-moi ", "sl ", "tus ", "peut! "];

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
    if(x===27)
        {
            lose_result.innerHTML = "Pourtant, mon texte était déjà bien correct!<br> Vous n’aviez qu’à cliquer sur Okay !";
        }
    else
        {
            lose_result.innerHTML =  "J'avais juste écrit <em>"+ erreurs[x] +"</em> au lieu de <em>"+ correct[x] + "</em>";
        } 
}, 70*1000);


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
    votre_texte[27] = "... ";

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
        btn_result.href="niveau_4.html";
        btn_result.innerHTML="Niveau 4";
     }
    else
    {
        if(x===27)
        {
            texte_result.innerHTML = "Mais non! Mon texte était déjà bien correct!<br>Voulez-vous encore essayer?";
        }
        else
        {
            texte_result.innerHTML = "Mais non! J'ai juste écrit <em>"+ erreurs[x] +"</em> au lieu de <em>"+ correct[x] + "</em><br>Voulez-vous encore essayer?";
        }
    } 
}


