import React from "react";
import "./Home.css"

function Home() {

    var config = require('../config');

    var links = [
        {
            title: "DB viewer",
            url: config.mongo_express
        }
    ]

    return (
        <div className="home-container">
            <h1>Home</h1>
            {links.map((item) => {
                return (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                );
            })}
            
        </div>
    );
}

export default Home;