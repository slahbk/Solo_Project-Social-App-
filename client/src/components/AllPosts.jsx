import React from 'react'

const AllPosts = (props) => {

  return (
    <div>
        {props.data.map((e,i)=>{
            return (
                <div key={i} className='card mb-3' style={{backgroundColor:"#24252A", color:"wheat"}}>
                    {props.users.map((ele, index) => {
                        if(ele.id === e.userId){
                        return (
                            <h4 className='card-header' key={index}>
                                <i className="bi bi-person-circle" style={{marginRight:"20px"}}></i>{ele.username}
                            </h4>)
                        }
                    })}
                    <div className='image-center'>
                        <h6>{e.createdAt}</h6>
                        <p className='card-text'>{e.body}</p>
                        <img src={e.image} alt="image" />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default AllPosts