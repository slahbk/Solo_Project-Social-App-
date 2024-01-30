import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllPosts = (props) => {

  return (
    <div>
        {props.data.map((e,i)=>{
            return (
                <div key={i}>
                    {props.users.map(ele => {
                        if(ele.id === e.userId){
                        return (<h4>{ele.username}</h4>)
                        }
                    })}
                    <h6>{e.createdAt}</h6>
                    <p>{e.body}</p>
                    <img src={e.image} alt="image" />
                </div>
            )
        })}
    </div>
  )
}

export default AllPosts