const forca0 = "images/forca0.png"


export default function Jogo(props){
    
    return (
        <div className="forca">
            <img src={forca0} alt="forca"/>
            <div className="escolherPalavra">
            <button onClick={props.startGame}>Escolher palavra</button>
            <p className="palavraCorreta">PALAVRA</p>
            </div>
        </div>

    )
}