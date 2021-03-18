import React from 'react';
import ReactDOM from 'react-dom';
import "./room.css";

function Room() {
    const [isLit, setLit] = React.useState(false);
    const [temp, setTemp] = React.useState(22);
    const brightness = isLit ? "lit" : "dark";
    return (
        <div className={`room ${brightness}`}>
            the room is {isLit ? 'lit' : 'dark'}
            <br />
            temperature is {temp}
            <br />
            <button onClick={() => setLit(!isLit)}>
                flip
            </button>
            <button onClick={() => setLit(true)}>
                On
            </button>
            <button onClick={() => setLit(false)}>
                Off
            </button>
            <button onClick={() => setTemp(temp+1)}>
                +
            </button>
            <button onClick={() => setTemp(temp-1)}>
                -
            </button>
        </div>
    );
}

ReactDOM.render(<Room />, document.getElementById('room'));