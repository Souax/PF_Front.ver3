"use client";
import React from "react";
import { signOut } from "next-auth/react";
import axios from "axios";
import { MdOutlineDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  email: string;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ email }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(`${apiUrl}/users/${email}`);
      if (response.status === 204) {
        console.log("アカウントが削除されました。");
        await signOut({ redirect: false });
        window.location.reload();
      } else {
        console.error("アカウント削除に失敗しました。");
      }
    } catch (error) {
      console.error("エラーが発生しました。", error);
    }
  };

  return (
    <div className="flex items-center pl-[1.5rem] pb-[0.6rem]">
      <button
        onClick={handleDeleteUser}
        className="flex items-center px-4 py-2 text-base rounded-md text-white transition"
      >
        <MdOutlineDelete className="mr-2 text-xl" />
        退会する
      </button>
    </div>
  );
};

export default DeleteButton;
