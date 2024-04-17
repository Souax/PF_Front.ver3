import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import PythonBooks from "./Python";
import { getPythonBooks } from "@/src/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function PythonBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const pythonbooks = await getPythonBooks(page);
  const totalDataCount = 399;
  const itemsPerPage = 10;
  const baseURL = "categories/python";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Python</div>
        <div className={styles.book_all_line} />
        <PythonBooks pythonbooks={pythonbooks} />
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
