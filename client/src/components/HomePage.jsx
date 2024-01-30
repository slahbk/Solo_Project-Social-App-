import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AllPosts from './AllPosts.jsx'
import Create from './Create.jsx'
import ProfilePage from './ProfilePage.jsx'

const HomePage = (props) => {

    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(()=>{
      axios("http://localhost:3000/posts/fetch")
        .then((result)=>{
          setData(result.data)
        })
    }, [refresh])

  return (
    <div>
        <nav>
            <input 
            type="text" 
            id='search' 
            onChange={e => setSearch(e.target.value)}
            />

            <button
              
            >Search</button>

            <button>Home</button>

            <button 
              onClick={()=> {return (<ProfilePage/>)}}
            >profil
            </button>
        </nav>
        
        <Create setRefresh={setRefresh} refresh={refresh} changeView={props.changeView}/>

        <AllPosts data={data}/>

    </div>
  )
}

export default HomePage