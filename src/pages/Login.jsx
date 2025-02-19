// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { validateEmail } from "../utils/helper.js";
// import PasswordInput from "../components/Input/PasswordInput.jsx";


// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState(""); // Changed the state variable name
//     const [error, setError] = useState("");

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         if (!validateEmail(email)) {
//             setError("Please enter a valid email address.");
//             return;
//         }

//         if(!password){
//             setError("Please enter password.");
//             return;
//         }

//         setError("")
//         //login Api call

//         // Continue with login logic here
//         console.log("Logging in with:", { email, password });
//     };

//     return (
//         <>

//             <div className="flex items-center justify-center mt-28">
//                 <div className="w-69 border rounded bg-white px-7 py-10">
//                     <form onSubmit={handleLogin}>
//                         <h4 className="text-2xl mb-7">Login</h4>
//                         <input
//                             type="text"
//                             placeholder="Email"
//                             className="input-box"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />

//                         <PasswordInput
//                             value={password} // Pass the correct state variable
//                             onChange={(e) => setPassword(e.target.value)}
//                         />

//                         {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
//                         <button type="submit" className="btn-primary">
//                             Login
//                         </button>
                        
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helper.js";
import PasswordInput from "../components/Input/PasswordInput.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Optional loading state

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Make API call to backend
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      // Handle successful login
      console.log("Login successful:", data);
      // Store the token in localStorage or cookies
      localStorage.setItem("token", data.token);
      setLoading(false);

      // Redirect or update UI as needed
      window.location.href = "/dashboard"; // Adjust the route as per your app
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Server error. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mt-28">
      <div className="w-69 border rounded bg-white px-7 py-10">
        <form onSubmit={handleLogin}>
          <h4 className="text-2xl mb-7">Login</h4>
          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

