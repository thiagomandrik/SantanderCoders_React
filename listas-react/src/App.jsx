import { useState } from "react";

const minhaLista = [
  { id: "1", value: "Frutas" },
  { id: "2", value: "Legumes" },
  { id: "3", value: "Carnes" },
];

export default function App() {
  

  return (
    <div>
      <h1>Listas React</h1>
      {minhaLista.map((item) => {
        return(
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  );
}
