import React from 'react'
import propTypes from 'prop-types'; 
import Button  from './Button';  

const Header=({title})=> {
  return (
    <header className='header'>
       <h1> {title}  </h1>
    <Button color="green" text="Add" />

        </header>
  )
}
Header.defaultProps={
    title:'task tracker',
}
Header.propTypes={
 title:propTypes.string.isRequired,    
}
//css in js
// const headingStyle={
// color:'red',
// backgroundColor:'black',
// textAlign:'center',
// fontSize:'20px',
// }
export default Header