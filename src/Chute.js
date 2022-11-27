export default function Chute(props){

    const {inputChute, typeGuess, setTypeGuess, guessTypedWord, buttonChute} = props
    return(
        <div className="chutarPalavra">
            <p>Já sei a palavra!</p>
            <input disabled={inputChute}  
            value={typeGuess} 
            onChange={(event) => setTypeGuess(event.target.value)}/>
            <button className="letra chutar" disabled={buttonChute} 
          onClick={guessTypedWord} >Chutar</button>
        </div>
        
    )
}