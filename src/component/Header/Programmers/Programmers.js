import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Card from '../Card/Card';

const Programmers = () => {
    const [persons, setPersons] = useState([]);
    const [info,setInfo] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[]);

    const handleSalaryCart = (person) => {
        const newPersons = [...info, person];
        setInfo(newPersons);
    }
    return (
        <div className="row">
            <Card persons={persons}  handleSalaryCart={handleSalaryCart}></Card>
            <Cart info={info}></Cart>
        </div>
    );
};

export default Programmers;