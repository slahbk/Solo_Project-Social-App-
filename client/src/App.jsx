import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import HomePage from './components/HomePage.jsx'
import axios from 'axios'
import ProfilePage from './components/ProfilePage.jsx'
import Search from './components/Search.jsx'


const App = () => {
  const [view, setView] = useState('signin')
  const [search, setSearch] = useState('')
  
  const changeView = (view, data) => {
    setView(view)
    setSearch(data)
  }
  
  const renderView = () => {
    if((view === 'signin') && (!localStorage.getItem("id"))){
      return <SignIn changeView={changeView}/>
    }
    else if(view === 'signup'){
      return <SignUp changeView={changeView}/>
    }
    else if(view === 'profile'){
      return <ProfilePage changeView={changeView}/>
    }
    else if(view === 'search'){
      return <Search changeView={changeView} search={search}/>
    }
    else if((view === 'home') || (localStorage.getItem("id"))){
      return <HomePage changeView={changeView}/>
    }
  }
  
  return (
    <div>

      {renderView()}
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))