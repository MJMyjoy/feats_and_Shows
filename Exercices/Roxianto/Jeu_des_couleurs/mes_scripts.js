
/* DECLARATION DES VARIABLES */

// Variables des 4 blocs principaux
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');

// Variable qui porte la div "parent" des 4 blocs
let parent = document.getElementById('parent');

// Variable du bouton PLAY
let start = document.getElementById('start');

// Variables a traiter ici en Javascript
let child = null;
let interval = null;
let timeout = null;

// Variable du bouton mode nuit ou mode jour, et celle du corps (body) de la page
let nuit_jour = document.getElementById("nuit_jour");
let corps = document.querySelector("body");

// Variable qui portera le numero du bloc gagnant
let gagnant = 0;


/* GESTION DE LA COULEUR DE FOND (NOIR OU BLANC) */

// Par defaut, on ecrit MODE NUIT sur le bouton nuit_jour
nuit_jour.textContent ="MODE NUIT";

// Une fois qu'on clique dessus
    nuit_jour.onclick = function ()
    {
        // S'il y etait ecrit MODE JOUR (Donc on y a deja encore cliqué)
        if (nuit_jour.textContent =="MODE JOUR")
        {
            // On remet le fond de la page en blancs et les ecrits principaux en noir
            corps.style.backgroundColor = "white";
            corps.style.color = "black";
            // On ecrit MODE NUIT sur le bouton
             nuit_jour.textContent ="MODE NUIT";
        }
        else
        {
            // Dans le cas contraire on noirci le fond de la page
      corps.style.backgroundColor = "black";
      // On eclairci les ecrits principaux
      corps.style.color = "white";
      // On ecrit MODE JOUR sur le bouton nuit_jour
        nuit_jour.textContent ="MODE JOUR";
        }
    };

/* FONCTION DES TRAITEMENTS DES OPERATIONS ALEATOIRES */
 
function rand_color() {
    // On donne aux blocs des couleurs aleatoires
    b1.style.backgroundColor = "#" + Math.random().toString(16).slice(6, 12);
    b2.style.backgroundColor = "#" + Math.random().toString(16).slice(6, 12);
    b3.style.backgroundColor = "#" + Math.random().toString(16).slice(6, 12);
    b4.style.backgroundColor = "#" + Math.random().toString(16).slice(6, 12);

    // On y precise le texte qui est TROUVE MOI
    b1.innerText = "TROUVE MOI";
    b2.innerText = "TROUVE MOI";
    b3.innerText = "TROUVE MOI";
    b4.innerText = "TROUVE MOI";

    // Un texte aleatoire GAGNANT est generé et attribué à un bloc aleatoire
    child = Math.floor(Math.random() * 4);
    parent.children.item(child).innerText = "GAGNANT";
}

/* EN CLIQUANT SUR LA TOUCHE PLAY */

start.addEventListener('click', function () {
    if (!interval) {
        // On donne un temps pour les changements des couleurs et generations du mot GAGNANT
        interval = setInterval(rand_color, 1000);
    }

    /* SI LE TEMPS EST ATTEINT */
    if (timeout) {
        // On fait appelle a clearTimeout qui met fin aux evenements aleatoires
        clearTimeout(timeout);
    }

    parent.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(e.target);
    }); 

    
    /* GESTION DE LA FIN DU JEU ET VERIFICATION DE LA TENTATIVE DE L'UTILISATEUR */
timeout = setTimeout(function () {
    // Arret du temps
    clearInterval(interval);

    // On verifie dans quel bloc se trouve le mot GAGNANT et on donne le nomero de ce bloc là à la variable "gagnant"
    if (b1.textContent =="GAGNANT")
        {
            gagnant =1;
        }

    if (b2.textContent =="GAGNANT")
        {
            gagnant=2;
        }

    if (b3.textContent =="GAGNANT")
        {
            gagnant =3;
        }


    if (b4.textContent =="GAGNANT")
        {
            gagnant =4;
        }

        //On met un fond noir aux 4 blocs
    b1.style.backgroundColor = "black";
    b2.style.backgroundColor = "black";
    b3.style.backgroundColor = "black";
    b4.style.backgroundColor = "black";

    // On donne une couleur blanche aux textes des 4 blocs
    b1.style.color = "white";
    b2.style.color = "white";
    b3.style.color = "white";
    b4.style.color = "white";

    //On y place des chiffres
    b1.innerText = "1";
    b2.innerText = "2";
    b3.innerText = "3";
    b4.innerText = "4";


    // Au clique sur un bloc, on verifie si la variable "gagnant" porte le numero de ce bloc
    b1.onclick = function ()
    {
        if (gagnant ==1)
            {
                // Si oui on affiche "Gagné" pour preciser que l'utilisateur a gagné le jeu
                alert("Gagné!");
            }
        else
        {
            // Si non c'est perdu
            alert("Perdu!");
        }
    };
    
    // On fait la meme chose avec tous les 4 blocs
    b2.onclick = function ()
    {
        if (gagnant ==2)
            {
                alert("Gagné!");
            }
        else
        {
            alert("Perdu!");
        }
    };
    
    b3.onclick = function ()
    {
        if (gagnant==3)
            {
                alert("Gagné!");
            }
        else
        {
            alert("Perdu!");
        }
    };
    
    b4.onclick = function ()
    {
        if (gagnant ==4)
            {
                alert("Gagné!");
            }
        else
        {
            alert("Perdu!");
        }
    };
    
// Le temps de changement des couleurs aleatoires et de la place du mot GAGNANT est de 10.5 secondes
}, 10.5 * 1000);

});
   