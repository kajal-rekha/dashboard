import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, backgroundColor }) => {
    const chartData = {
        labels: [],
        datasets: [
            {
                label: "Sales",
                data: [data, 100 - data],
                backgroundColor: backgroundColor,
                borderColor: "#1F2937",
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "50%"
    };

    return (
        <div className="w-24 h-24">
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default PieChart;
