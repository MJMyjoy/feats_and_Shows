let ardForm = document.getElementById("ardForm");
let formAdress = document.querySelector(".form-adress");
let formResult = document.querySelector(".form-result");
let formCopy = document.querySelector(".form-copy");
let ardAlert = document.querySelector(".ard-alert");

formAdress.addEventListener('input', function(){
    let chaineInverse = document.querySelector(".form-adress").value.split("").reverse().join("");
    let debut = chaineInverse.indexOf('xeh.oni.');
    let fin = chaineInverse.indexOf('"', debut);
        
    if(formAdress.value=="")
    {
        ardAlert.innerHTML = "";
    }
    else
    {
        if(debut==-1 || fin==-1)
        {
            ardAlert.style.color ="red";
            ardAlert.innerHTML = "Cette chaine ne contient pas d'adresse valide !";
        }
        else
        {
            formResult.value = chaineInverse.substring(debut, fin).split("").reverse().join("");
            ardAlert.style.color ="rgb(0, 150, 150)";
            ardAlert.innerHTML = "L'adresse a été extraite avec succès !";
        }
    }
});




formCopy.addEventListener("click", function(e){
   
    if(formResult.value.length)
    {

     navigator.clipboard.writeText(formResult.value).then(() =>
            {
            ardForm.reset();
            alert("Texte copié !");
            }) }
    else
            {
                ardAlert.style.color ="red";
                alert("Veillez d'abord coller la chaine contenant une adresse valide");
            }
            e.preventDefault();
})

// By MJ Myjoy