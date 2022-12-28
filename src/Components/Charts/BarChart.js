import React from 'react';
import ApexCharts from 'apexcharts'


const BarChart = () => {

    const chart1Options = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        series: [
            {
                name: 'New user',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57],
            },
            
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '32%',
                endingShape: 'rounded',
                borderRadius: 3,
            },
        },
        dataLabels: {
            enabled: false,
        },
       
        XAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        YAxis: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
        colors: ['#4F46E5', '#E4E4E7'],
        legend: {
            position: 'bottom',
            markers: {
                radius: 12,
                offsetX: -4,
            },
            itemMargin: {
                horizontal: 12,
                vertical: 20,
            },
        },
    }
    const chart1 = new ApexCharts(document.querySelector('#chart1'), chart1Options)
    chart1.render()

    return (
        <div className=''>
            <div className="py-12 bg-white">
                <div className="px-4 sm:px-6 lg:px-4 max-w-7xl">
                    <div className="max-w-lg mx-auto ">
                        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
                            <div className="px-4 pt-5 sm:pt-6">
                                <div className="sm:flex sm:items-center sm:justify-between">
                                    <p className="text-base font-bold text-gray-900">Visitor reports</p>

                                    <div className="mt-4 sm:mt-0">
                                        <button type="button" className="inline-flex items-center w-full px-3 py-2 text-sm font-medium leading-4 text-gray-600 bg-white border border-gray-300 rounded-lg shadow-sm sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                            <svg className="w-5 h-5 mr-2 -ml-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            Jan 7 - Feb 6
                                        </button>
                                    </div>
                                </div>

                                <div id="chart1" className="mt-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarChart