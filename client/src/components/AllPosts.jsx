import React, { useState } from 'react'

const AllPosts = (props) => {

    const [users, setUsers] = useState()

  return (
    <div>
        {props.data.map((e,i)=>{
            return (
                <div key={i}>
                    <p>{e.body}</p>
                    <img src={e.image} alt="image" />
                </div>
            )
        })}
    </div>
  )
}

export default AllPosts