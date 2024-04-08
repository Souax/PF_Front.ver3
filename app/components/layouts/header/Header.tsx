import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../.././BookHome/BookHome.module.css";
import { IoIosSearch } from "react-icons/io";
import HeaderClient from "./Header.client";

function Header() {
  return (
    <>
      <div className="fixed w-full z-10 bg-[#2E2E2E]">
        <div className="flex justify-between items-center text-white mx-auto max-w-screen-lg">
          <Link href="/" className="text-xl ml-[-6rem] pt-[1.5rem]">
            新Bookers
          </Link>
          <ul className="">
            <div className="flex mr-[-5rem]">
              <Link href="categories" className="mr-[1rem] pt-[1.5rem]">
                <IoIosSearch className="w-6 h-12 cursor-pointer hover:text-gray-500" />
              </Link>
              <div className="flex items-center">
                <HeaderClient />
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div className="pt-[4.7rem] pb-[0.74rem] border-b border-white bg-[#2E2E2E]">
        <ul className="flex justify-center gap-[1.6rem] pt-3.5 text-white">
          <Link href="/" className="cursor-pointer hover:text-gray-500">
            ホーム
          </Link>
          <Link href="/base" className="cursor-pointer hover:text-gray-500">
            プログラミング基礎
          </Link>
          <Link href="/design" className="cursor-pointer hover:text-gray-500">
            デザイン
          </Link>
          <Link
            href="/computer_science"
            className="cursor-pointer hover:text-gray-500"
          >
            CS(コンピューターサイエンス)
          </Link>
          <Link
            href="/front_end"
            className="cursor-pointer hover:text-gray-500"
          >
            フロントエンド
          </Link>
          <Link href="/back_end" className="cursor-pointer hover:text-gray-500">
            バックエンド
          </Link>
          <Link
            href="/infrastructure"
            className="cursor-pointer hover:text-gray-500"
          >
            インフラ・アーキテクチャ
          </Link>
          <Link
            href="/web_development"
            className="cursor-pointer hover:text-gray-500"
          >
            Web開発
          </Link>
          <Link
            href="/useful_book"
            className="cursor-pointer hover:text-gray-500"
          >
            実務で役立つ本
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
