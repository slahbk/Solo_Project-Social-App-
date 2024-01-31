import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OnePost from './OnePost.jsx';

const ProfilePage = (props) => {

    const [data, setData] = useState([])
    const [user, setUser] = useState('')
    const [refresh, setRefresh] = useState(true)
    const [clicked, setClicked] =useState(true)
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')

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

    const delet = (id) => {
      axios.delete(`http://localhost:3000/posts/delete/${id}`)
      .then(()=>{
        setRefresh(!refresh)
        props.changeView('profile')
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    
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
        <h4 style={{color:"white"}}>Welcome, {user}</h4>

      </header>

      <div className='profile-box'>
        {data.map((e, i) => {
          return (
              <div key={i}  className='card mb-3' style={{backgroundColor:"#24252A", color:"wheat"}}>
                  <div className='one-post-edit'>
                    
                    <div className='card-header' style={{height:"50px"}}>
                      <i
                        className="bi bi-x-lg"
                        style={{cursor:"pointer", color:"red", float:"right"}}
                        onClick={()=> delet(e.id)}
                      >
                      </i>
                      
                      <i
                        className="bi bi-pencil-fill"
                        style={{cursor:"pointer", color:"black", float:"right", marginRight:"20px"}}
                        onClick={()=> {
                          props.setOneData(e)
                          props.changeView('onepost', user)}}
                      ></i>

                    </div>
                    <p>{e.body}</p>
                    <img src={e.image} alt="image" />
                  </div>

          </div>)
        })}
      </div>
    </div>
  )
}

export default ProfilePage