

import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const data = {
        labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [
            {
                label: "Projects",
                data: [100, 150, 200, 300, 250, 150, 170, 180, 220],
                backgroundColor: "#3B82F6"
            },
            {
                label: "Working Hours",
                data: [90, 130, 190, 280, 230, 120, 160, 170, 210],
                backgroundColor: "#10B981"
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom", 
                labels: {
                    color: "#FFFFFF", 
                    font: {
                        size: 12 
                    }
                }
            },
            tooltip: {
                enabled: true
            }
        }
    };

    return (
        <div className="bg-[#192336] h-[27rem] p-5 rounded-lg ">
            <h2 className="text-slate-200">Project Statistics</h2>
            <div className="mt-14">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default BarChart;
