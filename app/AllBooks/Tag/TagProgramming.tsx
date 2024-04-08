import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoJava } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { FaPhp } from "react-icons/fa6";
import { DiRubyRough } from "react-icons/di";
import { AiFillGoogleCircle } from "react-icons/ai";

const Tag = () => {
  return (
    <div className="relative">
      <div className="absolute mt-[-184rem]">
        <div className="flex flex-col top-0 left-0 w-[13.5rem] h-[22rem] bg-transparent border-2 border-gray-300 rounded py-[1.3rem] px-[0.8rem] text-center">
          <h2 className="text-white">プログラミング言語</h2>

          {/* JavaScriptのボタン */}
          <Link
            href="/categories/javascript"
            className="flex items-center justify-center text-sm text-center mt-3.5 mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.9rem] py-[0.8rem] px-[0.1rem]"
          >
            <BiLogoJavascript className="pt-1 w-5 h-5" />
            JavaScript
          </Link>

          {/* TypeScriptのボタン */}
          <Link
            href="/categories/typescript"
            className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
          >
            <BiLogoTypescript className="pt-1 w-5 h-5" />
            TypeScript
          </Link>

          {/* Javaのボタン */}
          <Link
            href="/categories/java"
            className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
          >
            <BiLogoJava className="pt-1 w-5 h-5" />
            Java
          </Link>

          {/* Pythonのボタン */}
          <Link
            href="/categories/python"
            className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
          >
            <BiLogoPython className="pt-1 w-5 h-5" />
            Python
          </Link>

          {/* PHPのボタン */}
          <Link
            href="/categories/php"
            className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
          >
            <FaPhp className="pt-1 w-5 h-5" />
            PHP
          </Link>

          {/* Rubyのボタン */}
          <Link
            href="/categories/ruby"
            className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
          >
            <DiRubyRough className="pt-1 w-5 h-5" />
            Ruby
          </Link>

          {/* Goのボタン */}
          <Link
            href="/categories/go"
            className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
          >
            <AiFillGoogleCircle className="pt-1 w-5 h-5" />
            Go
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tag;
