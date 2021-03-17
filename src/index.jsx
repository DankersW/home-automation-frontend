import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const MediaCard = ({mediaCardInfo}) => {
    return (
        <div> 
            <h2>{mediaCardInfo.title}</h2>
            <p>{mediaCardInfo.body}</p>
            <img src={mediaCardInfo.imageUrl}></img>
            <p>Testing</p>
        </div>
    )
};

function Hi({name}){
    return (
        <div>
            Hello <name> {name} </name> !
        </div>
    );
}

const mediaCardInfo = {
    title:"card",
    body:"some <strong>long</strong> text",
    imageUrl:"https://www.w3schools.com/images/lamp.jpg"
}


//ReactDOM.render(<Hi name="Wouter"/>, document.getElementById('main'));
ReactDOM.render(<MediaCard mediaCardInfo={mediaCardInfo}/>, document.getElementById('main'));

// follow tutorial at: https://daveceddia.com/react-getting-started-tutorial/