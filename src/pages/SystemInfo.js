import React from "react";
import "./SystemInfo.css"
import DenseTable from "./../components/table/Table"

function SystemInfo() {
    return (
        <div className="system-info-container">
            <h1>System Info</h1>
            <p>docker info, which versions are running, status of each docker container, IP address host, etc.</p>
            <DenseTable></DenseTable>
        </div>
    );
}

export default SystemInfo;