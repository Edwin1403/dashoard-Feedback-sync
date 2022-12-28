import React from 'react'
import { Link } from 'react-router-dom'
import ApexCharts from 'apexcharts'

const Chart = () => {
    const chart4Options = {
        chart: {
            type: 'area',
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
                name: 'New user',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 76, 85, 101],
            },
            {
                name: 'Returning user',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57],
            },
        ],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
        },
        grid: {
            row: {
                opacity: 0,
            },
        },
        XAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        YAxis: {
            show: false,
        },
        fill: {
            type: 'solid',
            opacity: [0.05, 0],
        },
        colors: ['#4F46E5', '#818CF8'],
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


    
    const chart4 = new ApexCharts(document.querySelector('#chart4'), chart4Options)
   

    chart4.render()
    


    return (
        <div>
            <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                <div className="overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-2">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <p className="text-base font-bold text-gray-900">Traffic Sources</p>

                            <div className="mt-4 sm:mt-0">
                                <div>
                                    <label htmlFor="" className="sr-only"> Duration </label>
                                    <select name="" id="" className="block w-full py-0 pl-0 pr-10 text-base border-none rounded-lg focus:outline-none focus:ring-0 sm:text-sm">
                                        <option>Last 7 days</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-6">
                            <div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Narayana Hospital opening event</p>
                                    <p className="text-sm font-medium text-gray-900">1,382</p>
                                </div>
                                <div className="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                    <div className="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[60%]"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Synergy Healthcare user feed</p>
                                    <p className="text-sm font-medium text-gray-900">1,074</p>
                                </div>
                                <div className="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                    <div className="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[50%]"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">VR Mall Festival event</p>
                                    <p className="text-sm font-medium text-gray-900">1,211</p>
                                </div>
                                <div className="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                    <div className="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[30%]"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Kumaran Hospital lunching event</p>
                                    <p className="text-sm font-medium text-gray-900">403</p>
                                </div>
                                <div className="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                    <div className="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[15%]"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">DermiJan Festival launch</p>
                                    <p className="text-sm font-medium text-gray-900">386</p>
                                </div>
                                <div className="mt-2 bg-gray-200 h-1.5 rounded-full relative">
                                    <div className="absolute inset-y-0 left-0 bg-indigo-600 rounded-full w-[15%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-4">
                    <div className="px-4 pt-5 sm:px-6">
                        <div className="flex flex-wrap items-center justify-between">
                            <p className="text-base font-bold text-gray-900 lg:order-1">Sales Report</p>

                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm lg:order-2 2xl:order-3 md:order-last hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                                <svg className="w-4 h-4 mr-1 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Export to CSV 
                            </button>

                            <nav className="flex items-center justify-center mt-4 space-x-1 2xl:order-2 lg:order-3 md:mt-0 lg:mt-4 sm:space-x-2 2xl:mt-0">
                                <Link href="#" className="px-2 py-2 text-xs font-bold text-gray-900 transition-all border border-gray-900 rounded-lg sm:px-4 hover:bg-gray-100 dration-200"> 12 Months </Link>

                                <Link href="#" className="px-2 py-2 text-xs font-bold text-gray-500 transition-all border border-transparent rounded-lg sm:px-4 hover:bg-gray-100 dration-200"> 6 Months </Link>

                                <Link href="#" className="px-2 py-2 text-xs font-bold text-gray-500 transition-all border border-transparent rounded-lg sm:px-4 hover:bg-gray-100 dration-200"> 30 Days </Link>

                                <Link href="#" className="px-2 py-2 text-xs font-bold text-gray-500 transition-all border border-transparent rounded-lg sm:px-4 hover:bg-gray-100 dration-200"> 7 Days </Link>
                            </nav>
                        </div>

                        <div id="chart4" className=""></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart