import axios from 'axios'
import React, { useState } from 'react'

const Create = (props) => {

    const [body, setBody] = useState('')
    const [image, setImage] = useState('')

    const add = (data) => {
        const id = localStorage.getItem('id')
            axios.post(`http://localhost:3000/posts/add/${id}`, data)
            .then(()=>{
                props.setRefresh(!props.refresh)
                props.changeView('home')
            })
            .catch((err) => {
                console.log(err);
            })
    }

  return (
    <div className='create-box'>
        <label htmlFor="body">
            <textarea 
            style={{borderRadius:"10px"}}
            name="body" 
            id="body" 
            cols="60" 
            rows="3"
            placeholder="what's on your mind..."
            onChange={e => setBody(e.target.value)}
            ></textarea>
        </label><br />
        
        <label htmlFor="image">
            <input 
            style={{color:"black",
                width:"400px",
                marginLeft:"25px",
                marginTop:"15px",
                borderRadius:'10px'
            }}
            type="text" 
            accept='*'
            placeholder='image url...'
            onChange={e => setImage(e.target.value)}
            />
        </label><br />

        <button
            style={{color:"white",
                borderRadius:"10cap",
                color:"black",
                borderStyle:"none",
                backgroundColor:"GrayText",
                float:"right",
                marginTop:"15px"
            }}
            onClick={() => add({body: body, image: image})}
        >Publish</button>
    </div>
  )
}

export default Create