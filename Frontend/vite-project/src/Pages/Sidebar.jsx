import React from "react";
import { FaFlask } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { AiFillRobot } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import { BsGraphDown } from "react-icons/bs";
import { TbHierarchy2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <div className="h-full flex flex-col bg-white">

      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 p-3 rounded-xl">
            <FaFlask className="text-white text-2xl" />
          </div>
          <div>
            <h4 className="font-bold text-xl text-gray-900">AI Testing</h4>
            <p className="text-gray-500 text-sm">Platform</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">

        {/* Dashboard */}
        <NavLink to="/dashboard">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <MdOutlineDashboard className="text-xl" />
          
          <span>Dashboard</span>
        </div>

          </NavLink>
        
        {/* Agents */}
        <NavLink to="/agents">
 <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <AiFillRobot className="text-xl" />
          <span>Agents</span>
        </div>
        </NavLink>
       

        {/* Scenarios */}
        <NavLink to="/scenarios">
<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <FaFileAlt className="text-xl" />
          <span>Scenarios</span>
        </div>
        </NavLink>
        
<NavLink to="/Testruns">
<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <BsGraphDown className="text-xl" />
          <span>Test Runs </span>
        </div>
</NavLink>

<NavLink to="/MultiAgents">
<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <TbHierarchy2 className="text-xl" />
          <span>Multi-Agents</span>
          
        </div>
</NavLink>

        
        
      </nav>
      
      <div className="p-6 mt-auto border-t border-gray-200">
        <div className="bg-blue-50 p-4 rounded-xl">
          <p className="text-blue-950 text-sm">Demo Mode</p>
          <p className="text-blue-600 text-sm">Using simulated data</p>
        </div>
      </div>

    </div>
    
  );
}

export default Sidebar;