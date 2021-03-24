import React from 'react'
import axios from 'axios'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import AutoSizer from 'react-virtualized-auto-sizer'
import "./LineSeriesPlot.css"

function LineSeriesPlot({title, url, xAxis, yAxis}) {
    const [plotData, setPlotData] = React.useState([])

    React.useEffect(() => {
        axios.get(url)
        .then(response => {
            const messageData = response.data.message
            var points = []
            for (var i in messageData){
                var plotPoint = {x: new Date(messageData[i][xAxis]), y: messageData[i][yAxis]}
                points.push(plotPoint)
            }
            setPlotData(points)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [url, xAxis, yAxis]);

    return (
        <div className="plot-group">
            <div className="plot-title">
                <h3>{title}</h3>
            </div>
            <AutoSizer>
            {({ width }) => (
            <div className="plot">
                <XYPlot xType="time" width={width} height={275}>
                    <HorizontalGridLines />
                        <LineSeries data={plotData}/>
                    <XAxis />
                    <YAxis />
                </XYPlot>
            </div>
            )}
            </AutoSizer>
        </div>
    )
}

export default LineSeriesPlot