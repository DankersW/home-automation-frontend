import React from "react";
import "./Monitoring.css"
import LineSeriesPlot from "../components/graph/LineSeriesPlot"


function Monitoring() {
    var config = require('../config');
    const tempHumiUrl=config.temp_humi_url

    return (
        <div className="monitoring">
            <h1 className="title">Monitoring</h1>
            <div className="monitor-grid">
                <div className="tile-wide"> 
                    <LineSeriesPlot title="Temperature" url={tempHumiUrl} xAxis="timestamp" yAxis="temp"/>
                </div>
                <div className="tile ">2</div>
                <div className="tile ">3</div>
                <div className="tile-wide"> 
                    <LineSeriesPlot title="Humidity" url={tempHumiUrl} xAxis="timestamp" yAxis="humi"/>
                </div>
                <div className="tile ">5</div>
                <div className="tile tile-tall">6</div>
                <div className="tile ">7</div>
                <div className="tile ">8</div>
                <div className="tile ">9</div>
                <div className="tile ">10</div>
                <div className="tile tile-wide tile-tall">11</div>
                <div className="tile ">12</div>
            </div>
        </div>
    );
}

export default Monitoring;