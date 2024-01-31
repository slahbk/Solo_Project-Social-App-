import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Search = (props) => {

    const [data, setData] = useState([])
    const [user, setUser] = useState('')

    useEffect(async ()=> {
        console.log(props.users[0].username)
        const check = props.users.filter(e => {
            return e.username === props.search
        })
        if(check.length){
            const id = check[0].id
            await axios(`http://localhost:3000/users/fetch/${id}`)
            .then((result)=>{
                setData(result.data.posts)
                setUser(result.data.username)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }, [])

  return (
    <div>
        <header>
        <h3 className='logo'>LOGO</h3>
        <nav >
          <ul className='nav__links'>
            <li>
              <i
                className='bi bi-house-fill'
                style={{cursor:"pointer"}}
                onClick={()=>  props.changeView('home')}
              >
              </i>
            </li>

            <li>
              <i 
                id='profile'
                className='bi bi-person-circle'
                style={{cursor:"pointer"}}
                onClick={()=> props.changeView('profile')}
              >
              </i>
            </li>

            <li>
              <i
                className='bi bi-box-arrow-right'
                style={{cursor:"pointer"}}
                onClick={()=> {
                  props.changeView('signin')
                  localStorage.removeItem('id')
                }}>
              </i>
            </li>
          </ul>
        </nav>
        <h4 style={{color:"white"}}>search for, "{user}"</h4>

      </header>
        <div className='search-box'>
        {data.map((e, i)=> {
            return (
                <div key={i}  className='search-box-one'>
                    <h4 className='card-header'>{user}</h4>
                    <p>{e.body}</p>
                    <img src={e.image} alt="image" />
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Search