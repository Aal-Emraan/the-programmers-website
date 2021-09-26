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
            <br />
            <p><strong>Persons Added:</strong> {nameList.length}</p>
            <h5 className="text-warning">Added Persons Name:</h5>
            <ol>
                {nameList.map(name => <li key={name}>{name}</li>)}
                <br />
            <h5 className="text-warning cost">Total Cost: ${totalCost}</h5>
            </ol>
            <button className="btn btn-primary w-100">Hire them</button>

        </div>
    );
};

export default Cart;