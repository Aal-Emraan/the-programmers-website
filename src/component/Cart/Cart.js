import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let totalCost = 0;
    let nameList = [];
    for(const salary of props.info){
        if(nameList.indexOf(salary.name) === -1){
            totalCost += salary.salary;
            nameList.push(salary.name);
        }       
    }
    return (
        <div className="col-md-3 my-4 cart">
            <h3>Cart Summary</h3>
            <h5>Persons Added: {nameList.length}</h5>
            <h4>Total Cost: ${totalCost}</h4>
            <br />
            <h4>Added Persons Name:</h4>
            <ul>
                {nameList.map(name => <li key={name}>{name}</li>)}
            </ul>

        </div>
    );
};

export default Cart;