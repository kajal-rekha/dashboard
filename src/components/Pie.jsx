import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieCharts = () => {
    const data = {
        labels: [],
        datasets: [
            {
                data: [47.2, 68.8, 58.5],
                backgroundColor: ["#3B82F6", "#10B981", "#FF8343"],
                hoverBackgroundColor: ["#2563EB", "#059669", "#e47f4d"]
            }
        ]
    };

    return (
        <div className="bg-[#192336] flex flex-col gap-5 p-5 justify-center items-center h-[27rem] rounded-lg">
            <h2 className="text-slate-200 -ml-40 mt-3">Monthly Target</h2>
            <div className="w-[18rem] h-[18rem]">
                <Pie data={data} />
            </div>
            <div className="flex gap-16">
                <p className="text-slate-300 flex gap-0 items-center text-sm  flex-col">
                    <span className="font-medium">Pending</span>
                    <span className=" ">
                        <span className="text-[#3B82F6] text-lg">●</span>{" "}
                        Projects
                    </span>
                </p>
                <p className=" flex flex-col text-slate-300  gap-0 items-center text-sm ">
                    <span className="font-medium">Done</span>
                    <span className="">
                        <span className="text-[#10B981] text-lg">●</span>{" "}
                        Projects
                    </span>
                </p>
            </div>
        </div>
    );
};

export default PieCharts;
