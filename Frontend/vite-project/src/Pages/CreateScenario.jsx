import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateScenario() {
  const[agents, setAgents]=useState([])
useEffect(()=>{
  const fetchAgents=async()=>{
    try{
const res=await axios.get('http://localhost:4000/api/agents')
setAgents(res.data)
    }catch(err){
console.error("failed to fetch agents",err)
    }

  }
  fetchAgents()
},[])

  return (
    <div  className="p-4  min-h-screen">

      {/* Page Header */}
      <div className="max-w-4xl p-8 mx-auto mb-4">
        <h2 className="text-3xl font-semibold text-gray-900">
          Create Test Scenario
        </h2>
        <p className="text-gray-500 mt-1">
          Define a new test scenario for your AI agents
        </p>
      </div>

      {/* ===== Basic Information ===== */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6 mb-6">

        <h3 className="text-lg font-semibold text-gray-900">
          Basic Information
        </h3>

        {/* Scenario Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Scenario Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Customer refund handling"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            placeholder="Describe what this scenario tests"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-4">

          {/* Scenario Type */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Scenario Type
            </label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Single-Agent</option>
              <option>Multi-Agent</option>
              <option>Workflow</option>
            </select>
          </div>

          {/* Assign Agent */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Assign Agent (optional)
            </label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option disabled>Select an agent</option>
              <option>Calendar Assistant</option>
              <option>Customer Support Bot</option>
              <option>Travel Booking Agent</option>
            </select>
          </div>

        </div>
      </div>

      {/* ===== Test Configuration ===== */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">

        <h3 className="text-lg font-semibold text-gray-900">
          Test Configuration
        </h3>

        {/* Expected Behavior */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Expected Behavior <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            placeholder="Describe what the agent should do in this scenario..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Input Data JSON */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Input Data (JSON)
          </label>
          <textarea
            rows="6"
            defaultValue={`{}`}
            className="font-mono w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500">
            Define the input data for this test scenario in JSON format
          </p>
        </div>

     
        

      </div>
       <div className="max-w-4xl mt-6 mx-auto bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">
         <h3 className="text-lg font-semibold text-gray-900">
         Tags

        </h3>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Expected Behavior <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            placeholder="Describe what the agent should do in this scenario..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
</div>
<div className=" bottom-0 bg-white  py-2 flex justify-end mr-24 gap-3">
        <button className="px-5 py-2 rounded-md bg-gray-100">
          Cancel
        </button>
        <button className="px-2 py-5 rounded-md bg-blue-600 text-white flex items-center gap-2">
          💾 Create Scenario
        </button>
      </div>

    </div>
  );
}

export default CreateScenario;
