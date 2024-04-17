import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import { getTypeScriptBooks } from "@/src/ProgrammingAPI";
import TypescriptBooks from "./Typescript";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function TypescriptBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const typescriptbooks = await getTypeScriptBooks(page);
  const totalDataCount = 16;
  const itemsPerPage = 10;
  const baseURL = "categories/typescript";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Typescript</div>
        <div className={styles.book_all_line} />
        <TypescriptBooks typescriptbooks={typescriptbooks} />
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
