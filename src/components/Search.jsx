import React from 'react'
import './Search.css'
import change from '../change'
function Search() {
  return (
    <div className='search'>
        <input type="search" placeholder='search an equipment?'  onKeyUp={change}  />
    </div>
  )
}

export default Search