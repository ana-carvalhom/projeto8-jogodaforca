export default function Jogo(props){
    
    return (
        <div className="forca">
            <img src={props.imageForca} alt="forca"/>
            <div className="escolherPalavra">
            <button onClick={props.startGame}>Escolher palavra</button>
            <p className="palavraCorreta">{props.guessWord}</p>
            </div>
        </div>

    )
}