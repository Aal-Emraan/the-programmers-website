import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = (props) => {
    const element = <FontAwesomeIcon icon={faUserTie} />
    // const facebook = <FontAwesomeIcon icon={AiFillFacebook} />
    const {name,img,designation,salary,location,age,workplace} = props.person;
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
            <div className="card img-thumbnail text-white">
                <img src={img} className="card-img-top" style={style} alt="..."/>
                <div className="card-body">
                    <h4 className="card-title text-center">{name}</h4>
                    <p className="card-text text-center">{designation}</p>
                    <p><strong>Works at: </strong>{workplace}</p>
                    <p><strong>Age: </strong>{age}</p>
                    <p><strong>Salary:</strong> ${salary}/y</p>
                    <p><strong>Location: </strong>{location}</p>
                    <button onClick={() => props.handleSalaryCart(props.person)} className="btn btn-primary w-100">{element}  Add This Person</button>
                    <p className='icons'><i className="fab fa-facebook-square"></i><i className="fab fa-instagram-square"></i><i className="fab fa-linkedin"></i><i className="fab fa-twitter-square"></i></p>
                </div>
            </div>
        </div>
    );
};

export default Person;