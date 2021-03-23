import React from "react";
import "./Monitoring.css"
import TemperaturePlotter from "../components/graph/TemperaturePlotter"

//
function Monitoring() {
    return (
        <div className="monitoring">
            <h1 className="title">Monitoring</h1>
            <div className="monitor-grid">
                <div class="card-wide" id="tempGridCard"> <TemperaturePlotter></TemperaturePlotter> </div>
                <div class="card ">2</div>
                <div class="card ">3</div>
                <div class="card card-wide">4</div>
                <div class="card ">5</div>
                <div class="card card-tall">6</div>
                <div class="card ">7</div>
                <div class="card ">8</div>
                <div class="card ">9</div>
                <div class="card ">10</div>
                <div class="card card-wide card-tall">11</div>
                <div class="card ">12</div>
            </div>
        </div>
    );
}

export default Monitoring;