import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import JavascriptBooks from "./Javascript";
import { getJavaScriptBooks } from "@/src/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function JavascriptBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const javascriptbooks = await getJavaScriptBooks(page);
  const totalDataCount = 141;
  const itemsPerPage = 10;
  const baseURL = "categories/javascript";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>JavaScript</div>
        <div className={styles.book_all_line} />
        <JavascriptBooks javascriptbooks={javascriptbooks} />
        <div className="my-[3.5rem] mr-[4rem]">
          <PaginationComponent
            currentPage={page}
            totalDataCount={totalDataCount}
            itemsPerPage={itemsPerPage}
            baseURL={baseURL}
          />
        </div>
      </div>
    </>
  );
}
