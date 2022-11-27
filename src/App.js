import Jogo from "./Jogo"
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras";
import { useState } from "react";

function App() {

  const [disabled, setDisabled] = useState(true)

  return (
   <div className="containerJogo">
    <Jogo />
    <Letras buttonLetra={disabled}/>
    <Chute inputChute={disabled} buttonChute={disabled} />
   </div>
    
   
   
   
  );
}

export default App;
