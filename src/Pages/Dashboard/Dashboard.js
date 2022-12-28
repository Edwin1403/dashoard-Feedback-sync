import React from 'react'
import Box from '../../Components/Box/Box'
import BarChart from '../../Components/Charts/BarChart'
import Chart from '../../Components/Charts/Chart'
import Chart5 from '../../Components/Charts/Chart5'
import Navbar from '../../Components/NavBar/NavBar'


const Dashboard = () => {
  return (
    <div className=''>
      <Navbar />
      <Box />
      <div className=''>
        <Chart/>
      </div>
      <div className='flex py-12'>
        <BarChart />
        <div className='mt-7'>
        <Chart5/>
        </div>
      </div>

    </div>
  )
}

export default Dashboard