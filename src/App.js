import Jogo from "./Jogo"
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras";
import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const images = ["images/forca0.png", "images/forca1.png", "images/forca3.png", "images/forca4.png", "images/forca5.png", "images/forca6.png"]


function App() {

  const [disabled, setDisabled] = useState(true)
  const [imageForca, setImageForca] = useState(0)
  const [word, setWord] = useState([])
  const [guessWord, setGuessWord] = useState([])
  const [letter, setLetter] = useState((alfabeto))
  const [specialCharacters, setSpecialCharacters] = useState("")
    
function startGame(){
  setDisabled(false)
  randomWord()
  setLetter([])
  setImageForca(0)
}

function randomWord(){

  const wordCount = palavras.length
  const wordPosition = Math.floor(Math.random()* wordCount) 
  const showWord = palavras[wordPosition]
  const wordToArray = showWord.split("")
  setWord(wordToArray)
  console.log(showWord)

  let underline = []
  wordToArray.forEach((letter) => underline.push("_ "))
  setGuessWord(underline);
  console.log(underline)

  const newWord = showWord.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  setSpecialCharacters(newWord)

}

function chosenLetter(l){
  setLetter([...letter, l])
  console.log(letter)

  if (specialCharacters.includes(l)){
    isCorrect(l)
  } else {
    isWrong(l)
  }
}

function isCorrect(l){
console.log("Passo 1: essa palavra tem a letra " + l)
const newGuessedWord = [...guessWord]
console.log("Passo 2: newGuessedWord " + newGuessedWord )
console.log("Passo 3: specialCharacters " + specialCharacters)
console.log("Passo 4: word " + word)
word.forEach((letra, i) => {
  if (specialCharacters[i] === l){
    newGuessedWord[i] = letra

    console.log("a letra é " + letra)
  }
})
setGuessWord(newGuessedWord)
}

// function acertouLetra(l){
//   const novaPalavraJogo = [...palavraDoJogo]
//   palavraEscolhida.forEach((letra, i) => {
//       if(stringSemAcentos[i] === l){
//           novaPalavraJogo[i] = letra
//       }
//   })
//   setPalavraDoJogo(novaPalavraJogo)

function isWrong(l){
console.log("essa palavra não tem a letra " + l)
const newForcaImage = imageForca + 1
setImageForca(newForcaImage)
}
  return (
   <div className="containerJogo">
    <Jogo startGame={startGame} imageForca={images[imageForca]} guessWord={guessWord}/>
    <Letras alfabeto={alfabeto} letter={letter} chosenLetter={chosenLetter} />
    <Chute inputChute={disabled} buttonChute={disabled} />
   </div>
  
   
   
  );

}
export default App;
