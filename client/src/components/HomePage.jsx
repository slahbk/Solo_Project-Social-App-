import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AllPosts from './AllPosts.jsx'
import Create from './Create.jsx'

const HomePage = (props) => {

    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(async ()=>{
      await axios("http://localhost:3000/posts/fetch")
        .then((result)=>{
          setData(result.data)
        })
    }, [refresh])

  return (
    <div>
        <nav>
          <div className='search-bar'>
            <input 
            type="text" 
            id='search' 
            onChange={e => setSearch(e.target.value)}
            />

            <button
              onClick={()=> props.changeView('search', search)}
            >Search</button>
          </div>

            <button
              onClick={()=> setRefresh(!refresh)}
            >Home</button>

            <button 
              id='profile'
              onClick={()=> props.changeView('profile')}
            >profil
            </button>
        </nav>
        
        <Create setRefresh={setRefresh} refresh={refresh} changeView={props.changeView}/>

        <AllPosts data={data} users={props.users}/>

    </div>
  )
}

export default HomePage