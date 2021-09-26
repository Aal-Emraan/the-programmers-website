import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Card from '../Card/Card';

const Programmers = () => {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])
    return (
        <div className="row">
            <Card persons={persons}></Card>
            <Cart></Cart>
        </div>
    );
};

export default Programmers;