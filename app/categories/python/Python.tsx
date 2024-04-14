"use client";
import { ApiResponse } from "../../../types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../BookList.module.css";

type PythonBookProps = {
  pythonbooks: ApiResponse;
};

const PythonBooks = ({ pythonbooks }: PythonBookProps) => {
  const [sortedBooks, setSortedBooks] = useState(pythonbooks.data);

  const BooksReview = () => {
    const sorted = [...sortedBooks].sort((a, b) => {
      const reviewA = Number(a.params?.reviewAverage) || 0;
      const reviewB = Number(b.params?.reviewAverage) || 0;
      return reviewB - reviewA;
    });
    setSortedBooks(sorted);
  };

  return (
    <div>
      <div className="flex justify-end mr-[7.5rem]">
        <button
          onClick={BooksReview}
          className="mt-[-1.3rem] bg-white hover:bg-gray-300 rounded"
        >
          レビュー順に並び替え
        </button>
      </div>
      {sortedBooks.map((book, index) => (
        <div className="flex items-center pt-[4.5rem] mx-[21rem]" key={index}>
          <div className="flex items-center">
            <div className="flex">
              <div className="pt-[0.4rem]">
                <Image
                  src={book.params?.largeImageUrl}
                  alt={book.params?.title}
                  width={150}
                  height={50}
                  className="rounded-t-md"
                />
              </div>
              <div className="ml-10 text-white">
                <Link
                  href={book.params?.itemUrl}
                  className="text-[1.4rem] hover:text-gray-400"
                >
                  {book.params?.title}
                </Link>
                <div className="pb-[0.5rem] pt-2.5">{book.params?.author}</div>
                <div className="pb-2 text-[0.8rem]">
                  {book.params?.salesDate}発売/
                  {book.params?.publisherName}/{book.params?.size}
                </div>
                <div className="pb-[2rem]">
                  ⭐️ {book.params?.reviewAverage} ({book.params?.reviewCount}
                  件)
                </div>
                <div className="text-[1.3rem]">
                  価格: {book.params?.itemPrice}円(税込)
                  <Link
                    href={book.params?.itemUrl}
                    className="inline-block text-center bg-red-500 text-white text-[1rem] font-bold py-[0.22rem] px-2 ml-[3.5rem] rounded hover:bg-red-600"
                    rel="nofollow"
                  >
                    楽天市場で見る
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.book_bottom_line}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PythonBooks;
