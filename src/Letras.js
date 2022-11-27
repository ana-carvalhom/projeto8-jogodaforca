import { useState } from "react"
export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [letter, setLetter] = useState([])

function chosenLetter(letra){
    setLetter([...letter, letra])
    console.log(letter)
  }
   
    return (            
        <div className="letras">
            {alfabeto.map((letra) =>  <button className="letra" disabled={letter.includes(letra)} onClick={() => chosenLetter(letra)}>{letra}
            </button>)}
        </div>
    )
}