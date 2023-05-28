import { useState } from "react"

export default function MeuContador(){

    const [contador, setContador] = useState(0)
    
    function aumentar(){
        setContador(contador + 1)
    }

    function diminuir(){
        setContador(contador - 1)
    }


    return(
        <div>
            <h1>Meu Contador: {contador}</h1>
            { contador < 10 ? <button onClick={aumentar}>Aumentar</button> : <button onClick={diminuir}>Diminuir</button>}             
            { contador >= 10 ? <h1>Valor muito grande</h1>: null}
            
        </div>
    )
}