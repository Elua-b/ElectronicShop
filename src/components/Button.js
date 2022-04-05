import PropTypes from 'prop-types'
const onClick=()=>{}
const Button = ({color,text}) => {
  return( <button onclick={onclick}  style={{backgroundColor: color}}className='btn'>{text}</button>
 ) 
}
Button.defaultProps ={
  color:'steelblue'
}
Button.propTypes={
  text:PropTypes.string,
  color:PropTypes.string,
}
export default Button
