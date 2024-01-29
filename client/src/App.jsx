import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import HomePage from './components/HomePage.jsx'
import axios from 'axios'


const App = () => {
  const [view, setView] = useState('signin')
  const [user, setUser] = useState('')
  
  const changeView = (view, user) => {
    setView(view)
    setUser(user)
  }
  
  const renderView = () => {
    if(view === 'signin'){
      return <SignIn changeView={changeView}/>
    }
    else if(view === 'signup'){
      return <SignUp changeView={changeView}/>
    }
    else if(view === 'home'){
      return <HomePage user={user}/>
    }
  }
  
  return (
    <div>


      {renderView()}
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))