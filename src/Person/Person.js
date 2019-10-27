import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text"  onChange={props.changed} value={props.name} />
        </div>
    )
};

//this is a STATELESS COMPONENT ----> vs STATEFULL COMPONENT like a container if you use a lot of components

export default person;