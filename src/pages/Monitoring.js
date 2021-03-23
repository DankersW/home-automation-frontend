import React from "react";
import "./Monitoring.css"
import axios from 'axios'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


function TempMonitor() {

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        const url = 'http://localhost:4000/api/temp'
        axios.get(url)
        .then(response => {
            const val = response.data.message
            console.log(val)
            console.log(val[0].device_id)
            const t = val.map(obj => obj);
            console.log(t)
            setData(t)

            for(var i in val){
                console.log(i)
                console.log(val[i])
            }
        })
        .catch((error) => {
            console.log(error)
        })

    }, []);
    
    console.log("test")
    console.log(data)
    console.log("data above")
    //console.log(data[0].device_id)
    var plot_data = []
    for(var i in data){
        console.log(data[i])
        var item = {x: new Date(data[i].timestamp), y: data[i].temp}
        plot_data.push(item)
    }

    var plot_data_ = [{x: 1, y: 25.6}, {x: 2, y: 4}, {x: 3, y: 55}]


    return (
        <div>
            <h3>Results</h3>
            {data.length}
            <XYPlot xType="time" width={300} height={300}>
                <HorizontalGridLines />
                <LineSeries data={plot_data}/>
                <XAxis />
                <YAxis />
            </XYPlot>
        </div>
    )
}

function Monitoring() {
    return (
        <div className="Monitoring">
            <h1>Monitoring</h1>

            <p>Graph data goes here</p>
            <TempMonitor></TempMonitor>
        </div>
    );
}

export default Monitoring;