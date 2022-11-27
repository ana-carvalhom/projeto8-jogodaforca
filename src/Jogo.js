export default function Jogo(props){
    
    const {imageForca, startGame, guessWord} = props

    return (
        <div className="forca">
            <img src={imageForca} alt="forca"/>
            <div className="escolherPalavra">
            <button onClick={startGame}>Escolher palavra</button>
            <p className="palavraCorreta">{guessWord}</p>
            </div>
        </div>

    )
}