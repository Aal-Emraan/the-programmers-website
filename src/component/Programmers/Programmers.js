import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Card from '../Card/Card';
import './Programmers.css'

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
        <div className="container programmers">
            <div className="row">
                <Card persons={persons}  handleSalaryCart={handleSalaryCart}></Card>
                <Cart info={info}></Cart>
            </div>
        </div>
    );
};

export default Programmers;