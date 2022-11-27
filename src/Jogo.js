const images = ["images/forca0.png", "images/forca1.png", "images/forca3.png", "images/forca4.png", "images/forca5.png", "images/forca6.png"]


export default function Jogo(props){
    
    return (
        <div className="forca">
            <img src={props.imageForca} alt="forca"/>
            <div className="escolherPalavra">
            <button onClick={props.startGame}>Escolher palavra</button>
            <p className="palavraCorreta">{props.word}</p>
            </div>
        </div>

    )
}