import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

    const update = (data) => {

    }

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
        <nav>
            <button
              onClick={()=> props.changeView('home')}
            >Home</button>

            <button 
              onClick={()=> {
                setRefresh(!refresh)
                props.changeView('profile')}
              }
            >profil
            </button>
        </nav>
      {data.map((e, i) => {
        return (
            <div key={i}>
              {clicked ?
              <>
              <div className='header-post'>
                <h4>{user}</h4>
                <button
                  onClick={()=> delet(e.id)}
                >delete</button>
                <button
                  onClick={()=> setClicked(!clicked)}
                >Update</button>
              </div>

                <p>{e.body}</p>
                <img src={e.image} alt="image" />  
              </>
              : 
              <>
                <label htmlFor="body">
                  <textarea 
                  name="body" 
                  id="body" 
                  cols="30" 
                  rows="10"
                  placeholder="what's on your mind..."
                  defaultValue={e.body}
                  onChange={e => setBody(e.target.value)}
                  ></textarea>
                </label>
        
                <label htmlFor="image">
                    <input 
                    type="text" 
                    accept='*'
                    placeholder='image url...'
                    defaultValue={e.image}
                    onChange={e => setImage(e.target.value)}
                    />
                </label>

                <button
                  onClick={()=> update({body: body, image: image})}
                >Ok</button>
              </>
            }
              
        </div>)
      })}
    </div>
  )
}

export default ProfilePage