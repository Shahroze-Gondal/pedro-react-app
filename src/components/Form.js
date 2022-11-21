import React from 'react';
import './Form.css'

const Form = () => {
  return (
    <form className='form'>
      <input type='text' placeholder='Full Name...'/>
      <input type='text' placeholder='Email...'/>
      <input type='text' placeholder='Age...'/>
      <input type='password' placeholder='Password...'/>
      <input type='password' placeholder='Confirm Password...'/>
      <input type='submit' className='submit'/>
    </form>
  )
}

export default Form
