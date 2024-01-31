import React, { useState } from 'react'
import axios from 'axios'

const SignUp = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const create = async (data) => {
        await axios("http://localhost:3000/users/fetch")
        .then((result)=>{
            const check = result.data.filter(e => {
                return e.email === data.email || e.username === data.username
            })
            if(!check.length){
                try{
                    axios.post("http://localhost:3000/users/add", data)
                    props.changeView('signin')
                }
                catch(err){
                    console.log(err)
                }
            }
            else alert('username or email already exist')
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div className='signup-page'>
        <label htmlFor="username">
            <input 
            type="text"
            placeholder='username'
            required
            onChange={e => setUsername(e.target.value)}
            />
        </label>

        <label htmlFor="email">
            <input 
            type='text'
            placeholder='email'
            required
            onChange={e => setEmail(e.target.value)}
            />

        </label>

        <label htmlFor="psw">
            <input
            type='password'
            placeholder='password'
            required
            onChange={e => setPassword(e.target.value)}
            />
        </label>

        <button onClick={()=>{
            create({username: username, email: email, password: password})
        }}> sign up
        </button>

        <a 
          style={{cursor:"pointer"}}
          onClick={()=> props.changeView('signin')}>Already have an account, Sign in
        </a>

    </div>
  )
}

export default SignUp