import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helper.js";
import PasswordInput from "../components/Input/PasswordInput.jsx";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // Changed the state variable name
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if(!password){
            setError("Please enter password.");
            return;
        }

        setError("")
        //login Api call

        // Continue with login logic here
        console.log("Logging in with:", { email, password });
    };

    return (
        <>

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
                            value={password} // Pass the correct state variable
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
                        <button type="submit" className="btn-primary">
                            Login
                        </button>
                        
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
