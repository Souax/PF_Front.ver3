import Image from "next/image";
import React from "react";
import styles from "./BookHome.module.css";
import { ApiResponse } from "@/types/types";
import Link from "next/link";

type PopularityBooks = {
  popularitybooks: ApiResponse;
};

const PopularityBook = ({ popularitybooks }: PopularityBooks) => {
  return (
    <>
      <div className={styles.book_title}>人気技術書</div>
      <Link href="popularity" className={styles.book_look}>
        もっと見る
      </Link>
      <div className={styles.line} />

      <div className="flex justify-center items-center pt-[3.5rem]">
        {popularitybooks.data[0] && (
          <Link
            href={popularitybooks.data[0].params.itemUrl}
            className="flex flex-col items-center"
          >
            <Image
              src={popularitybooks.data[0].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5 truncate w-[15rem]">
              {popularitybooks.data[0].params.title}
            </div>
          </Link>
        )}
        {popularitybooks.data.length > 1 && (
          <Link
            href={popularitybooks.data[1].params.itemUrl}
            className="flex flex-col items-center"
          >
            <Image
              src={popularitybooks.data[1].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5 truncate w-[15rem]">
              {popularitybooks.data[1].params.title}
            </div>
          </Link>
        )}
        {popularitybooks.data.length > 2 && (
          <Link
            href={popularitybooks.data[2].params.itemUrl}
            className="flex flex-col items-center"
          >
            <Image
              src={popularitybooks.data[2].params.largeImageUrl}
              alt="Image 1"
              width={140}
              height={45}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5 truncate w-[15rem]">
              {popularitybooks.data[2].params.title}
            </div>
          </Link>
        )}
      </div>

      {/* 二段目 */}
      <div className="flex justify-center items-center pt-6 mb-[2rem]">
        {popularitybooks.data.length > 3 && (
          <Link
            href={popularitybooks.data[3].params.itemUrl}
            className="flex flex-col items-center truncate w-[15rem]"
          >
            <Image
              src={popularitybooks.data[3].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5 truncate w-[15rem]">
              {popularitybooks.data[3].params.title}
            </div>
          </Link>
        )}
        {popularitybooks.data.length > 4 && (
          <Link
            href={popularitybooks.data[4].params.itemUrl}
            className="flex flex-col items-center pt-[0.5rem] truncate w-[15rem]"
          >
            <Image
              src={popularitybooks.data[4].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5">
              {popularitybooks.data[4].params.title}
            </div>
          </Link>
        )}
        {popularitybooks.data.length > 5 && (
          <Link
            href={popularitybooks.data[5].params.itemUrl}
            className="flex flex-col items-center pt-[0.5rem] truncate w-[15rem]"
          >
            <Image
              src={popularitybooks.data[5].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5">
              {popularitybooks.data[5].params.title}
            </div>
          </Link>
        )}
      </div>
    </>
  );
};
export default PopularityBook;
