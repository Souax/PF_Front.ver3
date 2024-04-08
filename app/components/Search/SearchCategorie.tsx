"use client";
import { Box, Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import styles from "../../BookList.module.css";

type BookItem = {
  Item: {
    title: string;
    author: string;
    itemPrice: number;
  };
};

const SearchCategorie = ({ onSearch }: any) => {
  const [results, setResults] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const ref: any = useRef(null);

  const handleSearch = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!query.trim()) return; // クエリが空白のみの場合は何もしない

    try {
      const response = await axios.get(
        `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=${
          process.env.NEXT_PUBLIC_RAKUTEN_API_KEY
        }&title=${encodeURIComponent(query)}`
      );
      setResults(response.data.Items.map((item: BookItem) => item.Item)); // 検索結果をセット
      console.log(response);
    } catch (error) {
      console.error("検索中にエラーが発生しました", error);
      setResults([]); // エラーが発生した場合は、結果を空にする
    }
  };

  return (
    <>
      <div>
        <Box
          component={"form"}
          onSubmit={handleSearch}
          className="w-4/5 mx-auto my-3 flex items-center justify-center"
        >
          <TextField
            ref={ref}
            id="keyword"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="キーワードを入力..."
            className="text-white w-[50rem] rounded-md"
            inputProps={{
              style: {
                backgroundColor: "#ffffff",
                color: "black",
                borderRadius: "4px",
              },
            }}
          />

          <div className="px-2">
            <Button
              onClick={handleSearch}
              type="submit"
              className="px-5 py-1.5 text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
            >
              <IoIosSearch className="text-[1.7rem]" />
            </Button>
          </div>
        </Box>

        <div className="results">
          {results.map((book, index) => (
            <div
              className="flex items-center pt-[4.5rem] mx-[21rem]"
              key={index}
            >
              <div className="flex items-center">
                <div className="flex">
                  <div className="pt-[0.4rem]">
                    <Image
                      src={book.largeImageUrl}
                      alt={book.title}
                      width={150}
                      height={50}
                      className="rounded-t-md"
                    />
                  </div>
                  <div className="ml-10 text-white">
                    <Link
                      href={book.itemUrl}
                      className="text-[1.4rem] hover:text-gray-400"
                    >
                      {book.title}
                    </Link>
                    <div className="pb-[0.5rem] pt-2.5">{book.author}</div>
                    <div className="pb-2 text-[0.8rem]">
                      {book.salesDate}発売/
                      {book.publisherName}/{book.size}
                    </div>
                    <div className="pb-[2rem]">
                      ⭐️ {book.reviewAverage} ({book.reviewCount}
                      件)
                    </div>
                    <div className="text-[1.3rem]">
                      価格: {book.itemPrice}円(税込)
                      <Link
                        href={book.itemUrl}
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
      </div>
    </>
  );
};

export default SearchCategorie;
