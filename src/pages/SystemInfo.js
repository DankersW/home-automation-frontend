import React from "react";
import "./SystemInfo.css"
import DenseTable from "./../components/table/Table"
import axios from 'axios'

//var docker_data_hearders = ["version", "alias", "uptime", "status", "port"]
//var docker_data = [{name:'front-end', version: "v1.1.3", alias: "frontend", uptime: "546 seconds", status: "running", port: "80"},
//{name:'backend', version: "v1.0.1", alias: "backend", uptime: "30 seconds", status: "running", port: "5000"}]



function SystemInfo() {

    var config = require('../config');
    const url_docker_data = config.docker_data
    
    React.useEffect(() => {
        axios.get(url_docker_data)
        .then(response => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    });
    var docker_data_hearders = ["version", "alias", "uptime", "status", "port"]
    var docker_data = []

    return (
        <div className="system-info-container">
            <h1>System Info</h1>
            <p>docker info, which versions are running, status of each docker container, IP address host, etc.</p>
            <div className="table-wrapper">
                <h2>Docker-compose info</h2>
                <DenseTable table_headers={docker_data_hearders} table_data={docker_data}></DenseTable>
            </div>
            <div className="table-wrapper">
                <h2>Host info (IP address)</h2>
                <DenseTable table_headers={docker_data_hearders} table_data={docker_data}></DenseTable>
            </div>
        </div>
    );
}

export default SystemInfo;