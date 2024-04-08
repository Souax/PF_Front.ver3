import Link from "next/link";
import React from "react";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoVuejs } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandNuxt } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";
import { SiRubyonrails } from "react-icons/si";
import { SiLaravel } from "react-icons/si";

const TagFramework = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute mt-[-160rem]">
          <div className="flex">
            <div className="flex flex-col top-0 left-0 w-[13.5rem] h-[24rem] bg-transparent border-2 border-gray-300 rounded py-[1.2rem] px-[0.8rem] text-center">
              <h2 className="text-white">
                フレームワーク
                <br />
                ライブラリ
              </h2>

              {/* Reactのボタン */}
              <Link
                href="/categories/react"
                className="flex items-center justify-center text-sm text-center mt-4 mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
              >
                <BiLogoReact className="pt-1 w-5 h-5" />
                React
              </Link>

              {/* Vueのボタン */}
              <Link
                href="/categories/vue"
                className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
              >
                <BiLogoVuejs className="pt-1 w-5 h-5" />
                Vue.js
              </Link>

              {/* Next.jsのボタン */}
              <Link
                href="/categories/nextjs"
                className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
              >
                <SiNextdotjs className="pt-1 w-5 h-5" />
                Next.js
              </Link>

              {/* Nuxt.jsのボタン */}
              <Link
                href="/categories/nuxtjs"
                className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
              >
                <TbBrandNuxt className="pt-1 w-5 h-5" />
                Nuxt.js
              </Link>

              {/* jQueryのボタン */}
              <Link
                href="/categories/jquery"
                className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
              >
                <BiLogoJquery className="pt-1 w-5 h-5" />
                jQuery
              </Link>

              {/* Railsのボタン */}
              <Link
                href="/categories/rails"
                className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
              >
                <SiRubyonrails className="pt-1 w-5 h-5" />
                Rails
              </Link>
              {/* Laravelのボタン */}
              <Link
                href="/categories/laravel"
                className="flex items-center justify-center text-sm mb-4 bg-gray-300 hover:bg-gray-500 rounded-full w-[11rem] h-[0.7rem] py-[0.8rem] px-[0.1rem]"
              >
                <SiLaravel className="pt-1 w-5 h-5" />
                Laravel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagFramework;
