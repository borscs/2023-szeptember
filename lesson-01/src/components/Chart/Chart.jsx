import './Chart.css'
import ChartBar from "./CahrtBar";
const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalSum = dataPointValue.reduce((sum, a) => sum +a, 0);
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                sum={totalSum}
                label={dataPoint.label}
                />
            ))}
        </div>
    )

}

export default Chart;