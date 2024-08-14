import React from "react";
import PieChart from "./PieChart";

const DashboardCard = ({ title, amount, description, data, color }) => {
    return (
        <div className="bg-[#192336] p-4 rounded-lg flex items-center justify-between gap-5 ">
            <div className="flex flex-col gap-2">
                <h2 className="text-white font-semibold">{title}</h2>
                <p className="text-3xl text-white font-bold">Total: {amount}</p>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
            <PieChart data={data} backgroundColor={[color, "#f6f6f7"]} />
        </div>
    );
};

export default DashboardCard;
