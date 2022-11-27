import Jogo from "./Jogo"
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras";
import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function App() {

  const images = ["images/forca0.png", "images/forca1.png", "images/forca3.png", "images/forca4.png", "images/forca5.png", "images/forca6.png"]

  const [disabled, setDisabled] = useState(true)
  const [imageForca, setImageForca] = useState(0)
  const [word, setWord] = useState([])
  const [letter, setLetter] = useState((alfabeto))
    
function startGame(){
  setDisabled(false)
  randomWord()
  setLetter([])
}

function randomWord(){

  const wordCount = palavras.length
  const wordPosition = Math.floor(Math.random()* wordCount) 
  const showWord = palavras[wordPosition]
  const wordToArray = showWord.split("").map(() => " _")
  setWord(wordToArray)

}

function chosenLetter(l){
  setLetter([...letter, l])
  console.log(letter)
}

  return (
   <div className="containerJogo">
    <Jogo startGame={startGame} imageForca={images[imageForca]} word={word}/>
    <Letras alfabeto={alfabeto} letter={letter} chosenLetter={chosenLetter} />
    <Chute inputChute={disabled} buttonChute={disabled} />
   </div>
  
   
   
  );

}
export default App;
