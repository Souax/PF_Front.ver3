"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

function LogoutButton() {
  return (
    <div className="flex items-center pl-[1.5rem] pb-[0.6rem] hover:text-gray-400">
      <button onClick={() => signOut()} className="flex items-center pb-2">
        <FiLogOut className="flex mr-2" />
        ログアウト
      </button>
    </div>
  );
}

export default LogoutButton;
