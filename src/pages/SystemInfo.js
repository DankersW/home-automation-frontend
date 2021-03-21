import React from "react";
import "./SystemInfo.css"

function SystemInfo() {
    return (
        <div className="SystemInfo">
            <h1>System Info</h1>
            <p>docker info, which versions are running, status of each docker container, etc.</p>
        </div>
    );
}

export default SystemInfo;