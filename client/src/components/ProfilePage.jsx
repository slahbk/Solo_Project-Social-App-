import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProfilePage = (props) => {

    const [data, setData] = useState([])

    useEffect(()=>{
        const id = localStorage.getItem("id")
        axios(`http://localhost:3000/users/fetch/${id}`)
        .then((result)=>{
            setData(result.data.posts)
            console.log(result)
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage