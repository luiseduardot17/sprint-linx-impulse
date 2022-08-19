import './App.css'
import Estoque from './components/Estoque/Estoque'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header/>
      <Form/>
      <Estoque/>
    </div>
  )
}

export default App
