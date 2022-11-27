import Jogo from "./Jogo"
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras";
import { useState } from "react";

function App() {

  const [disabled, setDisabled] = useState(true)
    
function startGame(){
  setDisabled(false)
}

  return (
   <div className="containerJogo">
    <Jogo startGame={startGame}/>
    <Letras buttonLetra={disabled}/>
    <Chute inputChute={disabled} buttonChute={disabled} />
   </div>
  
   
   
  );
}

export default App;
