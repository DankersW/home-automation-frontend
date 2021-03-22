import React from "react";
import "./Monitoring.css"
import axios from 'axios'

function Te() {
    console.log("test")
    var data
    const dataUrl = 'https://jsonplaceholder.typicode.com/users'
    axios.get(dataUrl).then(res => {
            console.log(res)
            data = res.data
    })


    return (
        <div>
            <h3>Testing</h3>
            {data}
        </div>
    )
}

function Monitoring() {
    return (
        <div className="Monitoring">
            <h1>Monitoring</h1>

            <p>Graph data goes here</p>
            <Te></Te>
        </div>
    );
}

export default Monitoring;