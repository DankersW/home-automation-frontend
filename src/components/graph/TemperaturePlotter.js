import React from 'react'
import axios from 'axios'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import "./TemperaturePlotter.css"

function TemperaturePlotter() {
    const [plotData, setPlotData] = React.useState([])

    React.useEffect(() => {
        const url = 'http://localhost:4000/api/temp'
        axios.get(url)
        .then(response => {
            const messageData = response.data.message
            var points = []
            for (var i in messageData){
                var plotPoint = {x: new Date(messageData[i].timestamp), y: messageData[i].temp}
                points.push(plotPoint)
            }
            setPlotData(points)
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);


    return (
        <div className="tempPlot">
            <div className="plotTitle">
                <h3>Temperature</h3>
            </div>
            <div className="plot">
                <XYPlot xType="time" width={700} height={300}>
                    <HorizontalGridLines />
                    <LineSeries data={plotData}/>
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </div>
        </div>
    )
}

export default TemperaturePlotter