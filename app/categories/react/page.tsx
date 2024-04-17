import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import ReactBooks from "./React";
import { getReactBooks } from "@/src/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function ReactBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const reactbooks = await getReactBooks(page);
  const totalDataCount = 27;
  const itemsPerPage = 10;
  const baseURL = "categories/react";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>React</div>
        <div className={styles.book_all_line} />
        <ReactBooks reactbooks={reactbooks} />
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
