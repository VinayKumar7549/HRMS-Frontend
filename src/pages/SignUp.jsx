import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Employee');
  const [password, setPassword] = useState('');
  const [username, setUsername]= useState('');
  const joiningDate = new Date().toISOString().split('T')[0];

  const handleSignup = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      role,
      email,
      password,
    };

    try {
        const response = await axios.post("http://localhost:5000/api/signup", userData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert(response.data.message);
      } catch (error) {
        if (error.response) {
          console.error("Error Response:", error.response.data);
          alert(`Error: ${error.response.data.error}`);
        } else if (error.request) {
          console.error("No Response from Server:", error.request);
          alert("No response from server. Please try again.");
        } else {
          console.error("Error:", error.message);
          alert("Failed to register user. Please try again.");
        }
      }
      

    // Clear form
    setUsername("");
    setEmail('');
    setRole('Employee');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center mt-28">
      <div className="w-96 border rounded bg-white px-7 py-10">
        <form onSubmit={handleSignup}>
          <h4 className="text-2xl mb-7">Sign Up</h4>
          
          <input
            type="username"
            placeholder="Username"
            className="input-box w-full mb-4 px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="input-box w-full mb-4 px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <select
            className="input-box w-full mb-4 px-3 py-2 border rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>

          <input
            type="password"
            placeholder="Password"
            className="input-box w-full mb-4 px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="text"
            className="input-box w-full mb-4 px-3 py-2 border rounded bg-gray-100 cursor-not-allowed"
            value={joiningDate}
            readOnly
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
