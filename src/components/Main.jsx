import { useState } from "react";
import Home from "./Home";
import SideNavbar from "./SideNavbar";

const Main = () => {
    const [isSidebarExpanded, setSidebarExpanded] = useState(true);

    const toggleSidebar = () => {
        setSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <main className="flex gap-5 wrapper">
            <SideNavbar
                isExpanded={isSidebarExpanded}
                toggleSidebar={toggleSidebar}
            />
            <Home isSidebarExpanded={isSidebarExpanded} />
        </main>
    );
};

export default Main;
