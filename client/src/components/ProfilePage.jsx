import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProfilePage = (props) => {

    const [data, setData] = useState([])
    const [user, setUser] = useState('')
    const [refresh, setRefresh] = useState(true)

    useEffect(()=>{
        const id = localStorage.getItem("id")
        axios(`http://localhost:3000/users/fetch/${id}`)
        .then((result)=>{
            setData(result.data.posts)
            setUser(result.data.username)
            console.log(result)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [refresh])
    
  return (
    <div>
        <nav>
            <input 
            type="text" 
            id='search' 
            onChange={e => setSearch(e.target.value)}
            />

            <button
              onClick={()=> props.changeView('search')}
            >Search</button>

            <button
              onClick={()=> props.changeView('home')}
            >Home</button>

            <button 
              onClick={()=> {props.changeView('profile')}}
            >profil
            </button>
        </nav>
      {data.map((e, i) => {
        return (<div key={i}>
            <h4>{user}</h4>
            <p>{e.body}</p>
            <img src={e.image} alt="image" />
        </div>)
      })}
    </div>
  )
}

export default ProfilePage