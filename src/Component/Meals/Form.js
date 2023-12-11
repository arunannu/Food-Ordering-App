import React from 'react'
import Inputs from './Inputs'
import './Form.css';

const Form = (props) => {
  return (
    <div>
        <form className='form1'>
            <Inputs label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button className='btn'>+ Add</button>
        </form>
    </div>
  )
}

export default Form