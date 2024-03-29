import React, { useState } from 'react'
import axios from 'axios'

const SignIn = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const checkUser = async (data) => {
        await axios.get("http://localhost:3000/users/fetch")
        .then((result)=>{
          const check = result.data.filter(e => {
            return (e.username === data.username) && (e.password === data.password)
          })
          if(check.length) {
            window.localStorage.setItem("id", check[0].id)
            props.changeView('home', username)
          }
          else alert('wrong username or password!!')
        })
        .catch((err)=>{
            console.log(err)
        })
      }

  return (
    <div className='signin-page'>
        <label htmlFor="username">username
            <input 
            type="text"
            placeholder='username'
            required
            onChange={e => setUsername(e.target.value)}
            />
        </label>

        <label htmlFor="psw">password
            <input
            type='password'
            placeholder='password'
            required
            onChange={e => setPassword(e.target.value)}
            />
        </label>
        <p></p>
        <a 
          style={{cursor:"pointer"}}
          onClick={()=> props.changeView('signup')}>Sign Up</a>

        <button onClick={()=>{
            checkUser({username: username, password: password})
        }}> sign in
        </button>

    </div>
  )
}

export default SignIn