import React, { useState } from "react";

const LeaveRequest = () => {
  const [hovered, setHovered] = useState(false);

  const [form, setForm] = useState({ type: "", start: "", end: "", reason: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Leave Request Submitted: ", form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md relative">
      <h3 className="text-lg font-bold mb-4">Request Leave</h3>
      <div className="space-y-4">
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select Leave Type</option>
          <option value="personal">Personal Leave</option>
          <option value="sick">Sick Leave</option>
          <option value="workFromHome">Work from Home</option>
        </select>
        <div className="flex space-x-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">From</label>
            <input
              type="date"
              name="start"
              value={form.start}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700">To</label>
            <input
              type="date"
              name="end"
              value={form.end}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <textarea
          name="reason"
          value={form.reason}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="Reason"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Submit
        </button>
        {hovered && (
          <div className="absolute left-0 top-full mt-2 p-2 w-full bg-gray-700 text-white rounded-md shadow-lg">
            Click to submit your leave request.
          </div>
        )}
      </div>
    </form>
  );
};

export default LeaveRequest;
