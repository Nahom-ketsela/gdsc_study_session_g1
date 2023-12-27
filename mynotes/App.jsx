import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [Notes, setNotes] = useState({});
  const [showForm, setshowForm] = useState(false)
  return (
    <main className='app'>
      { showForm && <Form/>}
      <button onClick={() =>{
        setshowForm(prev => {
          return !prev;
        })
      }}
      className='showBtn'
      >
        {showForm?"hide":"show"}
      </button>
    </main>
  )
}

export default App
