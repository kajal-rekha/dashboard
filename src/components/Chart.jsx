import BarChart from "./BarChart";
import PieCharts from "./Pie";

const Chart = () => {
    return (
        <div className=" chart  gap-8 mt-3 items-center ">
            <PieCharts />
            <BarChart />
        </div>
    );
};

export default Chart;
