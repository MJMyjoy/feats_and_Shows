
var diaporama = [1,1];
var diapos = ["diapo1"]
var demos = ["demo1"]
affichage(1, 0 , 0);
affichage(1, 1, 1);

function boutons(n, no, dm) {
 affichage(diaporama[no] += n, no ,dm);
}

function actifIndic(n, no, dm) {
 affichage(diaporama[no] = n, no, dm);
}
	
function affichage(n, no, dm) {
  var i;
  var x = document.getElementsByClassName(diapos[no]);
	var indic = document.getElementsByClassName(demos[dm]);
  if (n > x.length) {diaporama[no] = 1}
  if (n < 1) {diaporama[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";  
  }
	 for (i = 0; i < indic.length; i++) {
     indic[i].className = indic[i].className.replace(" numeros", "");
  }
  x[diaporama[no]-1].style.opacity = "1";  
	 indic[diaporama[no]-1].className += " numeros";
}
