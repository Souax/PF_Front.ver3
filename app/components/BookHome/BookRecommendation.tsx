import Image from "next/image";
import React from "react";
import styles from "./BookHome.module.css";
import { ApiResponse } from "@/types/types";
import Link from "next/link";

type BookRecommendation = {
  recommendationbooks: ApiResponse;
};

const BookRecommendation = ({ recommendationbooks }: BookRecommendation) => {
  return (
    <>
      <div className="pt-10">
        <div className={styles.book_title}>オススメ！</div>
        <div className={styles.lines} />
      </div>
      <div className="flex justify-center items-center pt-[3.5rem]">
        {recommendationbooks.data[0] && (
          <Link
            href={recommendationbooks.data[0].params.itemUrl}
            className="flex flex-col items-center"
          >
            <Image
              src={recommendationbooks.data[0].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5 truncate w-[15rem]">
              {recommendationbooks.data[0].params.title}
            </div>
          </Link>
        )}
        {recommendationbooks.data.length > 1 && (
          <Link
            href={recommendationbooks.data[1].params.itemUrl}
            className="flex flex-col items-center"
          >
            <Image
              src={recommendationbooks.data[1].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5 truncate w-[15rem]">
              {recommendationbooks.data[1].params.title}
            </div>
          </Link>
        )}
        {recommendationbooks.data.length > 2 && (
          <Link
            href={recommendationbooks.data[2].params.itemUrl}
            className="flex flex-col items-center"
          >
            <Image
              src={recommendationbooks.data[2].params.largeImageUrl}
              alt="Image 1"
              width={140}
              height={45}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5 truncate w-[15rem]">
              {recommendationbooks.data[2].params.title}
            </div>
          </Link>
        )}
      </div>

      {/* 二段目 */}
      <div className="flex justify-center items-center pt-6">
        {recommendationbooks.data.length > 3 && (
          <Link
            href={recommendationbooks.data[3].params.itemUrl}
            className="flex flex-col items-center"
          >
            <Image
              src={recommendationbooks.data[3].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5 truncate w-[15rem]">
              {recommendationbooks.data[3].params.title}
            </div>
          </Link>
        )}
        {recommendationbooks.data.length > 4 && (
          <Link
            href={recommendationbooks.data[4].params.itemUrl}
            className="flex flex-col items-center pt-[0.5rem] mx-[3rem]"
          >
            <Image
              src={recommendationbooks.data[4].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5">
              {recommendationbooks.data[4].params.title}
            </div>
          </Link>
        )}
        {recommendationbooks.data.length > 5 && (
          <Link
            href={recommendationbooks.data[5].params.itemUrl}
            className="flex flex-col items-center pt-[0.5rem] mx-[2.8rem]"
          >
            <Image
              src={recommendationbooks.data[5].params.largeImageUrl}
              alt="Image 1"
              width={150}
              height={50}
              className="rounded-t-md"
            />
            <div className="text-[0.8rem] text-white text-center pt-2.5">
              {recommendationbooks.data[5].params.title}
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default BookRecommendation;
