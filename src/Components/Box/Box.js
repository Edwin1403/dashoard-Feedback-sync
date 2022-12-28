import React from 'react'
import { HiOutlineUsers } from 'react-icons/hi'
import { VscFeedback } from 'react-icons/vsc'
import { RiWalletLine } from 'react-icons/ri'
import { BsCalendarEvent } from 'react-icons/bs'

const Box = () => {
    return (
        <div>
            <div className='py-12 bg-gray-50 sm:py-16 lg:py-10'>
                <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                    <div className='grid max-w-4xl grid-cols-1 gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-6'>

                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <div className='justify-center items-center'>
                                    <span>
                                        <RiWalletLine className='' />
                                    </span>
                                </div>
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mt-3">Total Payment</p>
                                <div className=" items-center justify-between">
                                    <p className="text-normal font-bold text-gray-900">₹12,426</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <div className='justify-center items-center'>
                                    <span>
                                        <VscFeedback className='' />
                                    </span>
                                </div>
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mt-3">Total Feedback</p>
                                <div className=" items-center justify-between">
                                    <p className="text-normal font-bold text-gray-900">₹12,426</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <div className='justify-center items-center'>
                                    <span>
                                        <HiOutlineUsers className='' />
                                    </span>
                                </div>
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mt-3">Total Users</p>
                                <div className=" items-center justify-between">
                                    <p className="text-normal font-bold text-gray-900">₹12,426</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <div className='justify-center items-center'>
                                    <span>
                                        <HiOutlineUsers className='' />
                                    </span>
                                </div>
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mt-3">Current Users</p>
                                <div className=" items-center justify-between">
                                    <p className="text-normal font-bold text-gray-900">₹12,426</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <div className='justify-center items-center'>
                                    <span>
                                        <BsCalendarEvent className='' />
                                    </span>
                                </div>
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mt-3">Total Events</p>
                                <div className=" items-center justify-between">
                                    <p className="text-normal font-bold text-gray-900">₹12,426</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl">
                            <div className="px-5 py-4">
                                <div className='justify-center items-center'>
                                    <span>
                                        <BsCalendarEvent className='' />
                                    </span>
                                </div>
                                <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mt-3">Current Events</p>
                                <div className=" items-center justify-between">
                                    <p className="text-normal font-bold text-gray-900">₹12,426</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Box