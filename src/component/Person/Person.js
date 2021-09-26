import React from 'react';

const Person = (props) => {
    const {name,img,designation,salary,location} = props.person;
    const style = {
        width: "150px",
        height: "150px",
        borderRadius: "100%",
        display: "block",
        margin: "10px auto",
        objectFit: "cover"
    }
    return (
        <div className="col-md-4">
            <div className="card img-thumbnail">
                <img src={img} className="card-img-top" style={style} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{designation}</p>
                    <p>Salary: ${salary}/y</p>
                    <p>Location: {location}</p>
                    <a href="#" className="btn btn-primary d-block">Add This Person</a>
                </div>
            </div>
        </div>
    );
};

export default Person;