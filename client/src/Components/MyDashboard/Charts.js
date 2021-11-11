import { useSelector } from "react-redux";
import { useState } from 'react'
import { PieChart } from 'react-chartkick'
// import { PieChart, Pie } from 'recharts';
import 'chartkick/chart.js'
import { 
    Typography,
    Box
 } from '@mui/material';


function Charts() {
    const user = useSelector((state) => state.user.user);
    const streamers = useSelector((state) => state.entries.streamers);
    const { watched_entries_by_streamer, watched_entries_by_streamer_365D, watched_entries_by_streamer_90D } = user

    const [lookback, setLookback] = useState('all')


    let data;
    if(lookback === "year"){
        data = watched_entries_by_streamer_365D
    } else if (lookback === "all"){
        data = watched_entries_by_streamer
    } else if (lookback === "3month"){
        data = watched_entries_by_streamer_90D 
    }

    // console.log("from dash", data)

    let chartData = {}
    streamers.forEach(streamer => {
        if(data[streamer.id] > 0){
            chartData[streamer.name] = data[streamer.id]
        }
    })

    function handleTimeChange(e){
        setLookback(e.target.value)
    }

  //console.log(chartData)

    return (
        <Box>
            <Box>
                <select onChange={handleTimeChange}>
                    <option value="all">all time</option>
                    <option value="year">past year</option>
                    <option value="3month">past 3 months</option>
                </select>
            </Box>
            <Box>
                <PieChart data={chartData} donut={true} />
            </Box>
        </Box>
    )
}

export default Charts
