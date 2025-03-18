"use client";
import React from "react";
import { motion } from "framer-motion"; // for animations
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Search } from "lucide-react";

export default function MasterAdminDashboardBlackTheme() {
  // Updated data with exact text: "1st quater, 2nd quater, 3rd quester, 4th quater"
  const data = [
    { name: "1st quater", value: 25, color: "#6366F1" },  // Indigo
    { name: "2nd quater", value: 25, color: "#10B981" },  // Green
    { name: "3rd quester", value: 25, color: "#F59E0B" }, // Amber
    { name: "4th quater", value: 25, color: "#EF4444" },  // Red
  ];

  return (
    <motion.div
      // Fade in the entire page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-gray-900 text-white min-h-screen h-[102%]"
    >
      {/* Top Header */}
      <header className="flex flex-col md:flex-row justify-between items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
        <h1 className="text-xl font-semibold">February 15, 2025</h1>
        <div className="mt-3 md:mt-0 flex items-center gap-4">
          {/* Search box */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* User avatar (example) */}
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border border-gray-600 object-cover"
          />
        </div>
      </header>

      <main className="px-4 py-4 max-w-7xl mx-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Sub-Admins */}
          <motion.div
            className="bg-gray-800 rounded-md p-4 shadow group transition-all duration-300 hover:shadow-indigo-500/30"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-gray-400 group-hover:font-semibold transition-all">
              Total Sub-Admins
            </p>
            <div className="flex items-center justify-between mt-2 group-hover:font-bold transition-all">
              <h2 className="text-2xl font-bold">248</h2>
              <span className="text-green-400 text-sm">180 Active</span>
            </div>
          </motion.div>

          {/* Drivers */}
          <motion.div
            className="bg-gray-800 rounded-md p-4 shadow group transition-all duration-300 hover:shadow-indigo-500/30"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm text-gray-400 group-hover:font-semibold transition-all">
              Total Drivers
            </p>
            <div className="flex items-center justify-between mt-2 group-hover:font-bold transition-all">
              <h2 className="text-2xl font-bold">1,429</h2>
              <span className="text-green-400 text-sm">803 On</span>
            </div>
          </motion.div>

          {/* Cabs */}
          <motion.div
            className="bg-gray-800 rounded-md p-4 shadow group transition-all duration-300 hover:shadow-indigo-500/30"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm text-gray-400 group-hover:font-semibold transition-all">
              Total Cabs
            </p>
            <div className="flex items-center justify-between mt-2 group-hover:font-bold transition-all">
              <h2 className="text-2xl font-bold">957</h2>
              <span className="text-green-400 text-sm">632 Active</span>
            </div>
          </motion.div>
        </div>

        {/* Middle Row: Revenue Overview + Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Revenue Overview (Pie Chart) */}
          <motion.div
            className="bg-gray-800 rounded-md p-4 shadow group transition-all duration-300 hover:shadow-indigo-500/30"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg font-semibold mb-2 group-hover:font-bold transition-all">
              Revenue Overview
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    labelLine={false}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center mt-2 text-sm text-gray-400 group-hover:font-semibold transition-all">
              Sales
            </p>

            {/* Legend with exact text for each quarter */}
            <div className="flex justify-around mt-4 text-sm">
              <div className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "#6366F1" }}
                />
                1st quater
              </div>
              <div className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "#10B981" }}
                />
                2nd quater
              </div>
              <div className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "#F59E0B" }}
                />
                3rd quester
              </div>
              <div className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: "#EF4444" }}
                />
                4th quater
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="bg-gray-800 rounded-md p-4 shadow group transition-all duration-300 hover:shadow-indigo-500/30"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-lg font-semibold mb-2 group-hover:font-bold transition-all">
              Recent Activity
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between group-hover:font-semibold transition-all">
                <span>New driver registered</span>
                <span className="text-gray-400">2 minutes ago</span>
              </li>
              <li className="flex items-center justify-between group-hover:font-semibold transition-all">
                <span>Ride #2458 completed</span>
                <span className="text-gray-400">1 hour ago</span>
              </li>
              <li className="flex items-center justify-between group-hover:font-semibold transition-all">
                <span>System maintenance scheduled</span>
                <span className="text-gray-400">3 hours ago</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
