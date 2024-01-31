import axios from 'axios'
import React, { useState } from 'react'

const OnePost = (props) => {

  const [body, setBody] = useState('')
  const [image, setImage] = useState('')

  const add = (id, data) => {
    axios.put(`http://localhost:3000/posts/edit/${id}`, data)
    .then(()=>{
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
        <h4 style={{color:"white"}}>lets update this post</h4>

      </header>

      <div className='create-allposts-block' style={{marginLeft:"40%"}}>
        <label htmlFor="body">
            <textarea 
            name="body" 
            id="body" 
            cols="30" 
            rows="5"
            placeholder="update the body..."
            onChange={e => setBody(e.target.value)}
            ></textarea>
        </label><br />

        <label htmlFor="image">
            <input 
            type="text" 
            accept='*'
            placeholder='update th image url...'
            onChange={e => setImage(e.target.value)}
            />
        </label>

        <button
            style={{borderRadius:"10px"}}
            onClick={() => add(props.oneData.id, {body: body, image: image})}
        >Publish</button>
      </div>
    </div>
  )
}
export default OnePost