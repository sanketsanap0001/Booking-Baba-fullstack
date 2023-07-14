"use client";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="max-w-lg mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Train Ticket</h2>
            <p className="text-gray-500">PNR: 1234567890</p>
          </div>
          <div>
            <img src="/train-icon.png" alt="Train Icon" className="w-12 h-12" />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <div>
              <p className="text-sm text-gray-500">Departure</p>
              <p className="font-bold">New York (JFK)</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <div>
              <p className="text-sm text-gray-500">Destination</p>
              <p className="font-bold">London (LHR)</p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-bold">June 17, 2023</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-bold">9:00 AM</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Passenger</p>
            <p className="font-bold">John Doe</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Coach</p>
            <p className="font-bold">B3</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Seat</p>
            <p className="font-bold">12A</p>
          </div>
        </div>
      </div>
    </div>
  );
}
