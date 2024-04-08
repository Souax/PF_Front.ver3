"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Session } from "next-auth";

const ProfileEdit = ({ session }: { session: Session | null }) => {
  const [name, setName] = useState(session?.user?.name ?? "");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const email = session?.user?.email;

  useEffect(() => {
    if (session) {
      setName(session?.user?.name ?? "");
      setImageUrl(session?.user?.image ?? null);
    }
  }, [session]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    } else {
      setImageFile(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user[name]", name);
    if (imageFile) {
      formData.append("user[image]", imageFile);
    }

    try {
      const response = await axios.put(
        `${apiUrl}/users/${email ? encodeURIComponent(email) : ""}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        console.log("プロフィールが更新されました。");
        router.push("/profile");
      } else {
        console.error("プロフィールの更新に失敗しました。");
      }
    } catch (error) {
      console.error("エラーが発生しました。", error);
    }
  };

  return (
    <div className="flex justify-center items-center mb-[4rem] text-white">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full max-w-md p-8 rounded-lg shadow"
      >
        <div>
          <label htmlFor="name" className="block text-[1rem] font-medium">
            名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={handleNameChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-black"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-[1rem] font-medium">
            画像
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="mt-1 block w-full pb-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          更新
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
