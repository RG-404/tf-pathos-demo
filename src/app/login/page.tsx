"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "demo" && password === "secret123") {
      router.push("/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div
      className="min-h-screen bg-[url('/img/login-bg-purple.jpg')] bg-cover bg-center 
                grid grid-rows-[1fr_auto]"
    >
      {/* Header */} 

      {/* Main content */}
      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-2xl font-bold p-6 text-center">
          COMPANY NAME
        </div>
        <div className="flex flex-col gap-4 p-6 bg-white/70 backdrop-blur-lg w-96 rounded-xl text-black">
          <div className="text-sm text-center text-black/60">
            Access the PathOS environment
          </div>

          <input
            className="bg-white h-12 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="bg-white h-12 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Access Code"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="h-12 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleLogin}
          >
            Login
          </button>

          <div className="text-xs opacity-80 text-center text-black/50">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-white/70 text-xs pb-4">
        © 2025 Tradefronts Technologies Private Limited. All rights reserved.
      </p>
    </div>
  );
};

export default LoginPage;
