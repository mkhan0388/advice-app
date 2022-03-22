import './index.css'
// import './index'
import axios from 'axios'
import { useState } from 'react'
import Icon from './assests/iconComponent'
import PatternMobile from './assests/pattern-divider-mobile'


function App() {
  const [quote, setQuote] = useState('')
  const [id, setId] = useState()

 

  const adviceButton = () => {
    axios.get('https://api.adviceslip.com/advice').then((res) => {
      setQuote(res.data.slip.advice)
      setId(res.data.slip.id)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        </header>
       <div className='container'>
        <p className='id_number'>
         {`ADVICE #${id}`}
        </p>

        <p className='advice'>"{quote}"</p>
        <PatternMobile />
       </div>
       
        <button className='button' onClick={adviceButton} > <Icon /> </button>
      
    </div>
  );
}

export default App;
