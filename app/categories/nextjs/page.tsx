import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import NextBooks from "./Next";
import { getNextBooks } from "@/src/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function NextBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const nextbooks = await getNextBooks(page);
  const totalDataCount = 9;
  const itemsPerPage = 10;
  const baseURL = "categories/nextjs";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Next.js</div>
        <div className={styles.book_all_line} />
        <NextBooks nextbooks={nextbooks} />
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
