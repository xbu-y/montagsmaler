const wordEl = document.querySelector(".word");
const oldWordsEl = document.querySelector(".old-words");

// Wortliste
let words = [];
let currentWord = "";
let previousWords = [];

fetch("words.txt")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    words = text.split(",");
  });

// Die Funktion wird ausgeführt, wenn auf den Button Neues Wort geklickt wird
function onClick() {
  if (currentWord) {
    //Wenn es bereit ein Wort gibt, so wird es in Vorherige Wörter eingefügt
    previousWords.push(currentWord);
    //Danach aktualisieren wir die Website, um die Liste mit den Wörtern anzuzeigen
    oldWordsEl.innerHTML = previousWords.join(", ");
  }
  //Neues Wort generieren und als aktuelles Wort speichern
  currentWord = getRandomWord();
  //Danach aktualisieren wir unsere Website, um das neue Wort anzuzeigen
  wordEl.innerHTML = currentWord;
}

function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function getRandomWord() {
  return words[getRandomNumber(words.length)];
}
