import './App.css'
import Estoque from './components/Estoque/Estoque'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import SectionEnd from './components/SectionEnd/SectionEnd'

function App() {

  return (
    <div className="App">
      <Header/>
      <Form/>
      <Estoque/>
      <SectionEnd/>
    </div>
  )
}

export default App
