import React from "react";
import ApexCharts from "apexcharts";
// import { Link } from "react-router-dom";

const Chart5 = () => {
  const chart5Options = {
    chart: {
      type: "area",
      height: 260,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    series: [
      {
        name: "New user",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 76, 85, 101],
      },
      {
        name: "Returning user",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57],
      },
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
    },
    grid: {
      row: {
        opacity: 0,
      },
    },
    XAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    YAxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.05, 0],
    },
    colors: ["#4F46E5", "#818CF8"],
    legend: {
      position: "bottom",
      markers: {
        radius: 12,
        offsetX: -4,
      },
      itemMargin: {
        horizontal: 12,
        vertical: 20,
      },
    },
  };

  const chart5 = new ApexCharts(
    document.querySelector("#chart5"),
    chart5Options
  );

  chart5.render();

  return (
    <div class="px-4 pt-5 sm:px-6 mx-auto">
      <div class="flex flex-wrap items-center justify-between">
        <p class="text-base font-bold text-gray-900 lg:order-1">Feedbacks</p>
        <p class="text-sm text-gray-500 lg:order-1">
        2022 Total Feedback: 56K
        </p>

        <select className="block w-[30%] py-0 pl-0 pr-1 text-base border-none rounded-lg focus:outline-none focus:ring-0 sm:text-sm">
        <option>All Events</option>
        </select>

        <select className="block w-[30%] py-0 pl-0 pr-1 text-base border-none rounded-lg focus:outline-none focus:ring-0 sm:text-sm">
        <option>This Year</option>
        </select>

        
      </div>

      <div id="chart5" class=""></div>
    </div>
  );
};

export default Chart5;
