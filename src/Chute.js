export default function Chute(props){
    return(
        <div className="chutarPalavra">
            <p>Já sei a palavra!</p>
            <input disabled={props.inputChute}></input>
            <button className="letra chutar" disabled={props.buttonChute}>Chutar</button>
        </div>
        
    )
}