export default function Jogo(props){
    
    const {imageForca, startGame, guessWord, wordColor} = props

    return (
        <div className="forca">
            <img src={imageForca} alt="forca" data-test="game-image"/>
            <div className="escolherPalavra">
            <button onClick={startGame} data-test="choose-word">Escolher palavra</button>
            <p className={wordColor} data-test="word" data-answer={guessWord}>{guessWord}</p>
            </div>
        </div>

    )
}