import React from 'react';
import Person from '../../Person/Person';

const Card = (props) => {
    return (
        <div className="col-md-9 row g-3">
            {
                props.persons.map(person => <Person person={person} handleSalaryCart={props.handleSalaryCart} key={person.key}></Person>)
            }
        </div>
    );
};

export default Card;