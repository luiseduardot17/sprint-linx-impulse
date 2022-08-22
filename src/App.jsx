import './App.css'
import Estoque from './components/Estoque/Estoque'
import Footer from './components/Footer/Footer'
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
      <Footer/>
    </div>
  )
}

export default App
