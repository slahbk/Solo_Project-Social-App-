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
    <div>
        <label htmlFor="body">
            <textarea 
            name="body" 
            id="body" 
            cols="30" 
            rows="10"
            placeholder="what's on your mind..."
            onChange={e => setBody(e.target.value)}
            ></textarea>
        </label>
        
        <label htmlFor="image">
            <input 
            type="text" 
            accept='*'
            placeholder='image url...'
            onChange={e => setImage(e.target.value)}
            />
        </label>

        <button
            onClick={() => add({body: body, image: image})}
        >Publish</button>
    </div>
  )
}

export default Create