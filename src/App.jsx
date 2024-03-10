import { ssrImportKey } from 'vite/runtime'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  return (
    <>
     <Navbar/>
     <div className="cards">
     <Card title='card 1' para='This is card1'/>
     <Card title='card 2' para='This is card2'/>
     <Card title='card 3' para='This is card3'/>
     <Card title='card 4' para='This is card4'/>
     </div>
     <Footer/>
     
    </>
      
  )
}

export default App
