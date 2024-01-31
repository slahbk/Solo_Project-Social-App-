import axios from 'axios'
import React, { useState } from 'react'

const Create = (props) => {

    const [body, setBody] = useState('')
    const [image, setImage] = useState('')

    const add = (data) => {
        const id = localStorage.getItem('id')
        try{
            axios.post(`http://localhost:3000/posts/add/${id}`, data)
            props.changeView('home')
            props.setRefresh(!props.refresh)
        }
        catch(err) {
            console.log(err);
        }
    }

  return (
    <div className='create-box'>
        <label htmlFor="body">
            <textarea 
            name="body" 
            id="body" 
            cols="60" 
            rows="5"
            placeholder="what's on your mind..."
            onChange={e => setBody(e.target.value)}
            ></textarea>
        </label><br />
        
        <label htmlFor="image">
            <input 
            type="text" 
            accept='*'
            placeholder='image url...'
            onChange={e => setImage(e.target.value)}
            />
        </label>

        <button
            style={{color:"white", borderRadius:"10cap", borderStyle:"none", backgroundColor:"GrayText"}}
            onClick={() => add({body: body, image: image})}
        >Publish</button>
    </div>
  )
}

export default Create