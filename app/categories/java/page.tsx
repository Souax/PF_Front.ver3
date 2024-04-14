import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import JavaBooks from "./Java";
import { getJavaBooks } from "@/app/components/api/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function JavaBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const javabooks = await getJavaBooks(page);
  const totalDataCount = 120;
  const itemsPerPage = 10;
  const baseURL = "categories/java";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>JavaScript</div>
        <div className={styles.book_all_line} />
        <JavaBooks javabooks={javabooks} />
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
