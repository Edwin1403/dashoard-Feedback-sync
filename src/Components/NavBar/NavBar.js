import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>

            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div class="flex items-center">
                        <Link href="tel:5541251234" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</Link>
                        <Link href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                    </div>
                </div>
            </nav>
            <nav class="bg-gray-50 dark:bg-gray-700">
                <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div class="flex items-center justify-end">
                        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li>
                                <Link href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="#" class="text-gray-900 dark:text-white hover:underline">Company</Link>
                            </li>
                            <li>
                                <Link href="#" class="text-gray-900 dark:text-white hover:underline">Team</Link>
                            </li>
                            <li>
                                <Link href="#" class="text-gray-900 dark:text-white hover:underline">Features</Link>
                            </li>
                        </ul>

                        <div className="flex-1 hidden max-w-xs ml-auto lg:block">
                            <label for="" className="sr-only"> Search </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                <input type="search" name="" id="" className="block w-full py-2 pl-10 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm" placeholder="Search here" />
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;