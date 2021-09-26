import React from 'react';

const Cart = (props) => {
    // console.log(props.info);
    let totalCost = 0;
    for(const salary of props.info){
        totalCost += salary.salary;
    }
    return (
        <div className="col-md-3">
            <h3>Persons Added: {props.info.length}</h3>
            <h4>Total Cost: ${totalCost}</h4>

        </div>
    );
};

export default Cart;