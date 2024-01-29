import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import axios from 'axios'


const App = () => {
  const [view, setView] =useState('signin')
  
  const changeView = (view) => {
    setView(view)
  }
  
  const renderView = () => {
    if(view === 'signin'){
      return <SignIn changeView={changeView}/> 
    }
    else if(view === 'signup'){
      return <SignUp changeView={changeView}/>
    }
  }
  return (
    <div>


      {renderView()}
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))