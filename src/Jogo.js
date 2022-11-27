const forca0 = "images/forca0.png"


export default function Jogo(){
    return (
        <div className="forca">
            <img src={forca0} alt="forca"/>
            <div className="escolherPalavra">
            <button>Escolher palavra</button>
            <p className="palavraCorreta">PALAVRA</p>
            </div>
        </div>

    )
}