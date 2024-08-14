import Chart from "./Chart";
import DashboardCards from "./DashboardCards";
import Purchase from "./purchase/Purchase";
import Navbar from "./Navbar";

const Home = ({ isSidebarExpanded }) => {
    return (
        <div
            className={`flex flex-col gap-5 transition-all duration-300 ${
                isSidebarExpanded ? "ml-[14rem]" : "ml-[4.5rem] "
            }`}
        >
            <Navbar />
            <DashboardCards />
            <Chart />
            <Purchase />
        </div>
    );
};

export default Home;
