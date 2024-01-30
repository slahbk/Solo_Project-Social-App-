import axios from 'axios'
import React, { useState } from 'react'

const Create = (props) => {

    const [body, setBody] = useState('')
    const [image, setImage] = useState('')

    const add = async (data) => {
        const id = localStorage.getItem('id')
        try{
            axios.post(`http://localhost:3000/posts/add/${id}`, data)
            props.setRefresh(!props.refresh)
            props.changeView('home')
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
            onChange={e => setBody(e.target.value)}
            ></textarea>
        </label>
        
        <label htmlFor="image">
            <input 
            type="file" 
            accept='image/png, image/jpeg'
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