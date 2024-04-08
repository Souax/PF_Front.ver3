"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

function LoginButton() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          onClick={() =>
            signIn("google", { prompt: "login", callbackUrl: "/" })
          }
          className="flex items-center gap-2 bg-white text-gray-700 px-5 py-2 rounded border border-gray-300 shadow-sm hover:shadow-md"
        >
          <FcGoogle className="w-5 h-5" />
          <span>Googleでログイン</span>
        </button>
      </div>
    </div>
  );
}

export default LoginButton;
