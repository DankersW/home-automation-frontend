import React from "react";
import "./Monitoring.css"
import TemperaturePlotter from "../components/graph/TemperaturePlotter"

function Monitoring() {
    return (
        <div className="Monitoring">
            <h1 className="title">Monitoring</h1>
            <TemperaturePlotter></TemperaturePlotter>
        </div>
    );
}

export default Monitoring;