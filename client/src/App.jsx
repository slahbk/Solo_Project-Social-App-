import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import HomePage from './components/HomePage.jsx'
import axios from 'axios'
import ProfilePage from './components/ProfilePage.jsx'
import Search from './components/Search.jsx'
import OnePost from './components/OnePost.jsx'


const App = () => {
  const [view, setView] = useState('signin')
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  const [oneData, setOneData] = useState(null)
  
  useEffect(async () => {
    await axios("http://localhost:3000/users/fetch")
    .then((result)=>{
        setUsers(result.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  },[])

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
      return <ProfilePage changeView={changeView} setOneData={setOneData}/>
    }
    else if(view === 'search'){
      return <Search changeView={changeView} search={search} users={users}/>
    }
    else if(view === 'onepost'){
      return <OnePost changeView={changeView} oneData={oneData} search={search}/>
    }
    else if((view === 'home') || (localStorage.getItem("id"))){
      return <HomePage changeView={changeView} users={users}/>
    }
  }
  
  return (
    <div>
      {renderView()}
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))