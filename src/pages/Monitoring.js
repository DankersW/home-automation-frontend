import React from "react";
import "./Monitoring.css"
import LineSeriesPlot from "../components/graph/LineSeriesPlot"


function Monitoring() {
    return (
        <div className="monitoring">
            <h1 className="title">Monitoring</h1>
            <div className="monitor-grid">
                <div class="tile-wide"> 
                    <LineSeriesPlot title="Temperature" url="http://192.168.1.140:4000/api/temp" xAxis="timestamp" yAxis="temp"/>
                </div>
                <div class="tile ">2</div>
                <div class="tile ">3</div>
                <div class="tile-wide"> 
                    <LineSeriesPlot title="Humidity" url="http://192.168.1.140:4000/api/temp" xAxis="timestamp" yAxis="humi"/>
                </div>
                <div class="tile ">5</div>
                <div class="tile tile-tall">6</div>
                <div class="tile ">7</div>
                <div class="tile ">8</div>
                <div class="tile ">9</div>
                <div class="tile ">10</div>
                <div class="tile tile-wide tile-tall">11</div>
                <div class="tile ">12</div>
            </div>
        </div>
    );
}

export default Monitoring;