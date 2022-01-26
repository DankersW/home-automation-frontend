import React from "react";
import "./SystemInfo.css"
import DenseTable from "./../components/table/Table"
import axios from 'axios'


function SystemInfo() {
    var config = require('../config');
    var docker_data_hearders = ["repo", "version", "uptime", "status", "port"]
    const [docker_data, set_docker_data] = React.useState([])

    React.useEffect(() => {
        const fetch_data = async () => {
            const response = await axios.get(config.docker_data)
            set_docker_data(response.data.data)
        }
        fetch_data()        
    }, [config.docker_data])

    
    
    return (
        <div className="system-info-container">
            <h1>System Info</h1>
            <div className="table-wrapper">
                <h2>Docker-compose info</h2>
                <DenseTable table_headers={docker_data_hearders} table_data={docker_data}></DenseTable>
            </div>
            <div className="table-wrapper">
                <h2>Host info (IP address)</h2>
            </div>
        </div>
    );
}

export default SystemInfo;
