import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../AllBooks/AllBooks.module.css";
import { getFrontBooks } from "@/src/bookAPI";
import FrontBooks from "./Front";
import Pagination from "../components/pagination/PaginationPage";

export default async function FrontBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const frontbooks = await getFrontBooks(page);
  const itemsPerPage = 10;
  const totalPageCount = 100;
  const baseURL = "front_end";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>フロントエンド</div>
        <div className={styles.book_all_line} />
        <FrontBooks frontbooks={frontbooks} />
        <div className="my-[3.5rem] mr-[4rem]">
          <Pagination
            currentPage={page}
            totalPageCount={totalPageCount}
            itemsPerPage={itemsPerPage}
            baseURL={baseURL}
          />
        </div>
      </div>
    </>
  );
}
