import React from 'react';
import './Items.css';
import Form from './Form';
const Item = (props) => {
  return (
    <div className="item">
      <h2>{props.food}</h2>
      <p className="itemDescription">{props.type}</p>
      <div className="amountItem">
        <h2>${props.amount}</h2>
      </div>
      <Form/>
    </div>
  );
};

export default Item;
