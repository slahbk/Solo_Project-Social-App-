import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Search = (props) => {

    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    const [user, setUser] = useState('')

    useEffect(async ()=> {
        await axios("http://localhost:3000/users/fetch")
        .then((result)=>{
            setUsers(result.data)
            console.log(result.data);
        })
        .catch((err)=>{
            console.log(err)
        })
        console.log(users)
        const check = users.filter(e => {
            return props.search === e.username
        })
        if(check){
            // console.log(check);
            // const id = check[0].id
            // axios(`http://localhost:3000/users/fetch/${id}`) 
            // .then((result)=>{
            //     setData(result.data.posts)
            //     setUser(result.data.username)
            // })
            // .catch((err)=>{
            //     console.log(err);
            // })
        }
    }, [])

  return (
    <div>
        <nav>

            <button
              onClick={()=> props.changeView('home')}
            >Home</button>

            <button 
              onClick={()=> {props.changeView('profile')}}
            >profil
            </button>
        </nav>
        {data.map((e, i)=> {
            return (
                <div key={i}>
            <h4>{user}</h4>
            <p>{e.body}</p>
            <img src={e.image} alt="image" />
        </div>
            )
        })}
    </div>
  )
}

export default Search