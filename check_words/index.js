let myTextBox = document.getElementById("my-text-box");
let result = document.getElementById("result");

//Validation for empty field
let isEmpty = () => {
    if (myTextBox.value.length != 0) {
        return false;
    } else {
        return true;
    }
};

//Function pour renverser le texte
let reverseStr = () => {
    if (isEmpty()) {
        result.innerHTML = "Please Enter Some Text";
    } else {
        let myText = myTextBox.value;
        result.innerHTML = `Le texte renverser est: <span>${myText
      .split("")
      .reverse()
      .join("")}</span>`;
    }
};

//Function pour verifier le mot pallindrome
let isPalindrome = () => {
    if (isEmpty()) {
        result.innerHTML = "Please Enter Some Text";
    } else {
        let myText = myTextBox.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        if (myText == myText.split("").reverse().join("")) {
            result.innerHTML = `Ce mot <span>est Pallindrome</span>`;
        } else {
            result.innerHTML = `Ce mot <span>n'est pas Pallindrome</span>`;
        }
    }
};

//Compter les nombres de caracteres
let charCount = () => {
    if (isEmpty()) {
        result.innerHTML = "Please Enter Some Text";
    } else {
        let myText = myTextBox.value;
        result.innerHTML = `Nombre des caracteres vaut: <span>${myText.length}</span>`;
    }
};

//Compter les nombres de mots
let wordCount = () => {
    if (isEmpty()) {
        result.innerHTML = "Please Enter Some Text";
    } else {
        let myText = myTextBox.value;
        result.innerHTML = `Nombre des mot vaut: <span>${
      myText
        .trim()
        .split(/\s+/)
        .filter((item) => item).length
    }</span>`;
    }
};

//Chercher les mot(s) ou lettre dans la phrase
let search = () => {
    let searchText = document.getElementById("search-text").value;
    if (isEmpty() || searchText.length == 0) {
        result.innerHTML = "Either Or Both Input Fields Are Empty";
    } else {
        let myText = myTextBox.value;
        if (myText.includes(searchText)) {
            result.innerHTML = `Ce texte contient : <span>'${searchText}'</span>`;
        } else {
            result.innerHTML = `Ce texte ne contient pas <span>'${searchText}'</span>`;
        }
    }
};