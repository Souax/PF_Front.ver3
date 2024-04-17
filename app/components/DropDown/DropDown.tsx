"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { AiOutlineSetting } from "react-icons/ai";
import LogoutButton from "@/app/logout/LogoutButton";
import { MdOutlineDelete } from "react-icons/md";

type DropdownMenuProps = {
  children?: ReactNode;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleDropdown}>{children}</button>
      {isOpen && (
        <>
          <div className="absolute mt-2 ml-[-2.5rem] py-[1rem] w-[10.5rem] shadow-xl rounded-lg bg-[#3A3A3A]">
            <div className="text-[0.85rem] pl-[0.9rem] pb-[0.5rem]">
              Settings
            </div>
            <div className="flex items-center pl-[1.5rem] pb-[0.5rem] hover:text-gray-400">
              <AiOutlineSetting className="mr-2" />
              <Link href="/profile">プロフィール</Link>
            </div>
            <LogoutButton />
            {/*<div className="w-full h-[0.08rem] bg-gray-500"></div>
            <div className="text-[0.85rem] mt-3 pl-[0.9rem] pb-[0.6rem]">
              Danger zone
            </div>
            <div className="flex items-center pl-[1.5rem] pb-[0.5rem] text-rose-500 hover:text-red-600">
              <Link href="/profile/Withdrawal" className="flex items-center">
                <MdOutlineDelete className="mr-2" />
                退会する
              </Link>
      </div>*/}
          </div>
        </>
      )}
    </div>
  );
};

export default DropdownMenu;
