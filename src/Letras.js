export default function Letras(props) {
    
const {alfabeto, letter, chosenLetter} = props

   
    return (            
        <div className="letras">
            {alfabeto.map((letra) =>  (<button className="letra" disabled={letter.includes(letra)} 
            onClick={() => chosenLetter(letra)}>{letra}
            </button>))}
        </div>
    )
}