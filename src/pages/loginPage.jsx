import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [username, setUsername] = useState("abc");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/login", { username, password })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Login failed. Please check your username and password.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <input
              type="text"
              className="w-full focus:outline-none focus:ring-blue-500 rounded-md"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <input
              type="password"
              className="w-full focus:outline-none focus:ring-blue-500 rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 transition duration-300"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
