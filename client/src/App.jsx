import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import HomePage from './components/HomePage.jsx'
import axios from 'axios'
import ProfilePage from './components/ProfilePage.jsx'


const App = () => {
  const [view, setView] = useState('signin')
  const [user, setUser] = useState('')
  
  const changeView = (view) => {
    setView(view)
    // setUser(user)
  }
  
  const renderView = () => {
    if((view === 'signin') && (!localStorage.getItem("id"))){
      return <SignIn changeView={changeView}/>
    }
    else if(view === 'signup'){
      return <SignUp changeView={changeView}/>
    }
    else if((view === 'home') || (localStorage.getItem("id"))){
      return <HomePage user={user} changeView={changeView}/>
    }
  }
  
  return (
    <div>


      {renderView()}
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))