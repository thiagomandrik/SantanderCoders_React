import { useEffect } from "react";
import { useState } from "react";

const minhaLista = [
  { id: "1", value: "Frutas" },
  { id: "2", value: "Legumes" },
  { id: "3", value: "Carnes" },
];

function App() {
  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    if(pesquisa){
      const novaLista = minhaLista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase());
      });
      setProdutos(novaLista)
    }else{
      setProdutos(minhaLista)
    }
  }, [pesquisa]);

  return (
    <div>
      <h1>Efeitos colaterais</h1>
      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Pesquise aqui"
        type="text"
      />

      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
