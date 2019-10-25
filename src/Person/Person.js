import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};

//this is a STATELESS COMPONENT ----> vs STATEFULL COMPONENT like a container if you use a lot of components

export default person;