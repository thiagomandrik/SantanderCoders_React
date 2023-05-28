import MeuBotao from './components/MeuBotao.jsx'
import MeuComponente from './components/MeuComponente.jsx'

function App() {

  return (
    <div>
      <h1>Olá mundo!</h1>
      <MeuComponente/>
      <MeuBotao conteudo='me clique' />
      <MeuBotao conteudo='depois aqui'/>
      <MeuBotao conteudo='por fim aqui'/>
    </div>

  )
}

export default App