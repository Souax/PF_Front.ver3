"use client";
import { ApiResponse } from "@/types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Link from "next/link";

type NewBookProps = {
  newbooks: ApiResponse;
};

const TopPage = ({ newbooks }: NewBookProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth / 2);

    const updateWidth = () => {
      setWidth(window.innerWidth / 2);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      <div className="flex justify-center bg-[#3A3A3A]">
        <Image src="/images/books.png" alt="books" width={180} height={108} />
        <div className="flex flex-col text-center text-xl text-white pt-20 ml-2">
          Webエンジニアのための技術書データベース
        </div>
      </div>
      <div className="text-xl text-white text-center pt-4 pr-2">新刊書</div>
      <div className="flex justify-center items-center pt-7 pb-10">
        <Splide
          options={{
            rewind: true,
            width: width,
            perPage: 4,
            focus: "center",
            type: "loop",
            autoplay: true,
            perMove: 1,
            pagination: false,
          }}
        >
          {newbooks.data.map((book, index) => (
            <SplideSlide key={index}>
              <Link
                href={book.params.itemUrl}
                className="flex flex-col items-center"
              >
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={book.params?.largeImageUrl}
                    alt={book.params?.title}
                    width={140}
                    height={35}
                    className="rounded-t-md"
                  />
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default TopPage;
