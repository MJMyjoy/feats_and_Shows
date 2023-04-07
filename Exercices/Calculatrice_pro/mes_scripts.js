// Declaration des variables
var operateur,a,b,n,mr,ms,point=1;
var tourClic=false;

function saisie(c)
{	
	// 	Cette fontion s'occupe de la saisie des chiffres et autres
	if(tourClic)
	{
		tourClic=false;
		// On vide la barre des reponses avant d'y inserer la nouvelle valeur
		document.form1.case1.value="";
	}
	document.form1.case1.value +=c;
}
	

function scientific(n)
// Cette fontion s'occupe des fonctions scientifiques
{
	a=parseFloat(eval(document.form1.case1.value));
	/* La valeur de "a" sera toujours passée en paramettre aux fonctions mathematiques,
	ca represente la valeur active dans la barre des reponses */
	switch (n)
	{ 
		// "n" est un numero qu'on donne à chaque bouton d'une fonction
		// Chaque fontion est appelée en suivant le numero de la fonction cliquée
		case 1:document.form1.case1.value = Math.sqrt(a); break;
        // La fonction pow(x, y) eleve x à la y ème puissance 
        case 2:document.form1.case1.value= Math.pow(a, 2); break;
		case 3:document.form1.case1.value = Math.PI; break;
		// Sin, Cos et Tang se calculent en radiant
		case 4:document.form1.case1.value = Math.sin(a); break;
		case 5:document.form1.case1.value = Math.cos(a); break;
		case 6:document.form1.case1.value = Math.tan(a); break;
		case 7:document.form1.case1.value = Math.log(a); break;
		case 8:document.form1.case1.value = Math.exp(a); break;
		case 9:document.form1.case1.value = Math.LN2; break;
		case 10:document.form1.case1.value = Math.LN10; break;
		// ArcSin, ArcCos et ArcTang se calculent en radiant
		case 11:document.form1.case1.value = Math.asin(a); break;
		case 12:document.form1.case1.value = Math.acos(a); break;
		case 13:document.form1.case1.value = Math.atan(a); break;
        // La fonction pow(x, y) eleve x à la y ème puissance 
        case 14:document.form1.case1.value= Math.pow(a, 3); break;
	}
}
	