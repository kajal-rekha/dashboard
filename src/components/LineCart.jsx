// import { useEffect, useRef } from "react";
// import {
//     Chart,
//     LineController,
//     LineElement,
//     PointElement,
//     LinearScale,
//     Title,
//     CategoryScale
// } from "chart.js";

// const LineChart = () => {
//     const chartRef = useRef(null);
//     const chartInstance = useRef(null);

//     useEffect(() => {

//         Chart.register(
//             LineController,
//             LineElement,
//             PointElement,
//             LinearScale,
//             Title,
//             CategoryScale
//         );

//         if (chartInstance.current) {
//             chartInstance.current.destroy();
//         }

//         const myChartRef = chartRef.current.getContext("2d");

//         chartInstance.current = new Chart(myChartRef, {
//             type: "line",
//             data: {
//                 labels: [
//                     "January",
//                     "February",
//                     "March",
//                     "April",
//                     "May",
//                     "June", "July"
//                 ],
//                 datasets: [
//                     {
//                         label: "Line Chart",
//                         data: [65, 59, 80, 81, 56, 55, 40],
//                         fill: false,
//                         borderColor: "rgb(23, 97, 181)",
//                         borderWidth: 2
//                     }
//                 ]
//             },
//             options: {
//                 responsive: true,
//                 plugins: {
//                     title: {
//                         display: true,
//                         text: "Traffic Overview"
//                     }
//                 }
//             }
//         });

//         return () => {
//             if (chartInstance.current) {
//                 chartInstance.current.destroy();
//             }
//         };
//     }, []);

//     return <canvas ref={chartRef} ></canvas>;
// };

// export default LineChart;

import React, { useEffect, useState } from "react";

const DataValidator = () => {
    const jsonData = `
    [
        {"id":"1","name":"tag_trend","value":"1"},
        {"id":"2","name":"tag_header_layout","value":"0"},
        {"id":"3","name":"tag_welcome_layout","value":"0"},
        {"id":"4","name":"tag_prods_autoload","value":"0"},
        {"id":"5","name":"tag_expand_search","value":"0"},
        {"id":"6","name":"tag_show_side_trend","value":"0"},
        {"id":"7","name":"tag_auto_dark","value":"0"},
        {"id":"8","name":"tag_anron_ico_head","value":"0"},
        {"id":"9","name":"tag_prods_slider","value":"1"},
        {"id":"10","name":"tag_send_comment","value":"0"},
        {"id":"11","name":"tag_profile_donation","value":"1"},
        {"id":"12","name":"tag_profile_qr","value":"1"},
        {"id":"13","name":"tag_prods_cat_slider","value":"1"},
        {"id":"14","name":"tag_wallet_layout","value":"1"},
        {"id":"15","name":"tag_go_pro_layout","value":"1"},
        {"id":"16","name":"tag_show_password","value":"1"},
        {"id":"17","name":"tag_prods_layout","value":"1"},
        {"id":"18","name":"tag_ads_layout","value":"0"},
        {"id":"19","name":"tag_wallet_layout","value":"0"},
        {"id":"20","name":"tag_album_layout","value":"0"},
        {"id":"21","name":"tag_blog_layout","value":"0"},
        {"id":"22","name":"tag_friends_nearby_layout","value":"0"},
        {"id":"23","name":"tag_games_layout","value":"0"},
        {"id":"24","name":"tag_group_layout","value":"0"},
        {"id":"25","name":"tag_home_layout","value":"0"},
        {"id":"26","name":"tag_job_layout","value":"0"},
        {"id":"27","name":"tag_messages_layout","value":"0"},
        {"id":"28","name":"tag_page_layout","value":"0"},
        {"id":"29","name":"tag_search_layout","value":"0"},
        {"id":"30","name":"tag_settings_layout","value":"0"},
        {"id":"31","name":"tag_timeline_layout","value":"0"},
        {"id":"32","name":"tag_extra_opts","value":"0"},
        {"id":"33","name":"tag_posts_feed","value":"0"},
        {"id":"34","name":"tag_artplayer","value":"0"},
        {"id":"35","name":"tag_show_comments","value":"0"},
        {"id":"36","name":"tag_hide_menu","value":"0"}
    ]
    `;

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        try {
            const data = JSON.parse(jsonData);

            const isDataValid = data.every((item) => {
                return item.id && item.name && item.value;
            });

            setIsValid(isDataValid);
        } catch (error) {
            console.error("JSON parsing failed:", error);
            setIsValid(false);
        }
    }, [jsonData]);

    return (
        <div>
            {isValid ? (
                <p>JSON Data is valid and correctly structured.</p>
            ) : (
                <p>JSON Data is invalid or has a wrong structure.</p>
            )}
        </div>
    );
};

export default DataValidator;
