import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateScenario from "./Pages/createScenario";
import Sidebar from "./Pages/Sidebar";
import Dashboard from "./Pages/Dashboard"; // ⬅️ import dashboard
import "./App.css";
import Agents from "./Pages/Agents";
import Scenario from "./Pages/Scenario";
import Testcases from "./Pages/Testcases";
import MultiAgents from "./Pages/MultiAgents";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-70 bg-white shadow-sm">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Routes>
            <Route path="/" element={<CreateScenario />} />
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/agents" element={<Agents />} />
              <Route path="/scenarios" element={<Scenario />} />
              <Route path="/testruns" element={<Testcases/>} />
              <Route path="/multiagents" element={<MultiAgents/>} />

         

          {/* Optional default redirect */}
          
        </Routes>
      </main>
    </div>
  );
}

export default App;
