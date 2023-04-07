let btn= document.querySelector("button");
let corps= document.querySelector("body");
let textes= document.querySelector("main");

btn.onclick = function()
{
    corps.style.background="black";
    textes.style.opacity="1";
    textes.style.color="pink";
}