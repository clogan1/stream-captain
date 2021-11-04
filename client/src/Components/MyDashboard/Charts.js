import { useSelector } from "react-redux";
import { PieChart } from 'react-chartkick'
// import { PieChart, Pie } from 'recharts';
import 'chartkick/chart.js'


function Charts() {
    const user = useSelector((state) => state.user.user);
    const streamers = useSelector((state) => state.entries.streamers);
    const { watched_entries_by_streamer } = user


    let chartData = {}
    streamers.forEach(streamer => {
        if(watched_entries_by_streamer[streamer.id] > 0){
            chartData[streamer.name] = watched_entries_by_streamer[streamer.id]
        }
    })

  //console.log(chartData)

    return (
        <PieChart data={chartData} donut={true} />
    )
}

export default Charts
