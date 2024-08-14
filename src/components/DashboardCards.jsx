import React from "react";
import DashboardCard from "./DashboardCard";

const DashboardCards = () => {
    const cardsData = [
        {
            title: "Active Servers",
            amount: "15",
            description: "Servers currently running.",
            data: 70,
            color: "#3B82F6"
        },
        {
            title: "CPU Usage",
            amount: "65%",
            description: "Current CPU usage across all servers.",
            data: 55,
            color: "#10B981"
        },
        {
            title: "Disk Space Usage",
            amount: "80%",
            description: "Total disk space used across all servers.",
            data: 40,
            color: "#F59E0B"
        }
    ];

    return (
        <div className="grid grid-cols md:grid-cols-3 gap-10 ">
            {cardsData.map((card, index) => (
                <DashboardCard
                    key={index}
                    title={card.title}
                    amount={card.amount}
                    description={card.description}
                    data={card.data}
                    color={card.color}
                />
            ))}
        </div>
    );
};

export default DashboardCards;
