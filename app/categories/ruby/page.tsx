import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import RubyBooks from "./Ruby";
import { getRubyBooks } from "@/src/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function RubyBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const rubybooks = await getRubyBooks(page);
  const totalDataCount = 40;
  const itemsPerPage = 10;
  const baseURL = "categories/ruby";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Ruby</div>
        <div className={styles.book_all_line} />
        <RubyBooks rubybooks={rubybooks} />
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
