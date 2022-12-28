import React from "react";
import BoxAdmin from "../../Components/Box/BoxAdmin";
import Chart from "../../Components/Charts/Chart";
import Chart5 from "../../Components/Charts/Chart5";
import Customer from "../../Components/Customor details/Customer";
import Navbar from "../../Components/NavBar/NavBar";

const AdminDashboard = () => {
  return (
    <div className="mx-auto max-w-7xl ">
      <div className="justify-between flex mx-auto">
        <div className="flex justify-start"><Navbar /></div>
        <div className="justify-end">
          <button className="border-spacing-6 border-blue-600 overflow-hidden rounded-xl">
            Add New Event
          </button>
        </div>
      </div>
      <BoxAdmin />
      <div className="flex flex-wrap gap-x-6">
        <div className="w-[32.1%] bg-white border border-gray-200 overflow-hidden rounded-xl">
          <Customer />
        </div>
        <div className="w-[65%] bg-white border border-gray-200 overflow-hidden rounded-xl">
          <Chart5 />
        </div>
      </div>
      <div className="mt-4 mb-4">
        <Chart />
      </div>
    </div>
  );
};

export default AdminDashboard;
