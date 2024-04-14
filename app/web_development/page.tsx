import Image from "next/image";
import styles from "../AllBooks/AllBooks.module.css";
import { getWebBooks } from "@/app/components/api/bookAPI";
import WebBooks from "./WebDevelopment";
import Pagination from "../components/pagination/PaginationPage";

export default async function WebBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const webbooks = await getWebBooks(page);
  const itemsPerPage = 10;
  const totalPageCount = 6;
  const baseURL = "web_development";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Web開発書籍</div>
        <div className={styles.book_all_line} />
        <WebBooks webbooks={webbooks} />
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
