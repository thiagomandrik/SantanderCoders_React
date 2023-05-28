import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resultadoFinal = await resultado.json();

      return resultadoFinal;
    }

    buscarDados().then((res) => setTarefas(res));
  }, []);

  return (
    <div>
      <h1>Buscando dados com Fetch</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return <li key={tarefa.id}>{tarefa.title}</li>;
        })}
      </ol>
    </div>
  );
}
