// app/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-900 p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to the Demo Application
      </h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        This is a simple demo app to showcase UI. Click
        the button below to go to the login page.
      </p>
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Login
      </button>
    </main>
  );
}
