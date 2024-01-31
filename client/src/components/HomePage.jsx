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
          props.changeView('home')
        })
    }, [refresh])

  return (
    <div>
      <header>
        <h3 className='logo'>LOGO</h3>
        <nav >
          <ul className='nav__links'>
            <li>
              <i
                className='bi bi-house-fill'
                style={{cursor:"pointer"}}
                onClick={()=> setRefresh(!refresh)}
              >
              </i>
            </li>

            <li>
              <i 
                id='profile'
                className='bi bi-person-circle'
                style={{cursor:"pointer"}}
                onClick={()=> props.changeView('profile')}
              >
              </i>
            </li>

            <li>
              <i
                className='bi bi-box-arrow-right'
                style={{cursor:"pointer"}}
                onClick={()=> {
                  props.changeView('signin')
                  localStorage.removeItem('id')
                }}>
              </i>
            </li>
          </ul>
        </nav>
        <div className='search-bar'>
            <input 
            style={{marginRight:"20px"}}
            type="text" 
            id='search'
            placeholder='search'
            onChange={e => setSearch(e.target.value)}
            />

            <i
            className='bi bi-search'
            style={{cursor:"pointer", color:"white"}}
              onClick={()=> props.changeView('search', search)}
            >
            </i>
          </div>

      </header>
      <div className='create-allposts-block'>
        <Create setRefresh={setRefresh} refresh={refresh} changeView={props.changeView}/>

        <AllPosts data={data} users={props.users}/>
      </div>

    </div>
  )
}

export default HomePage