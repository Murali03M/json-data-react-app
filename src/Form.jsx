import React from 'react'
import Button from './Button'
import './App.css';
const Form = (props) => {
  return (
      <div className='form'>
          <form onClick={(e) =>(e.preventDefault())} >
              
              <Button props={props} buttonText="users" />
              <Button props={props} buttonText="posts" />
              <Button props={props} buttonText="comments"/>
       </form>
    </div>
  )
}

export default Form;


