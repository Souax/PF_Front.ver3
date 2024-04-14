import Image from "next/image";
import styles from "../AllBooks/AllBooks.module.css";
import { getInfraBooks } from "@/app/components/api/bookAPI";
import InfraBooks from "./Infrastructure";
import Pagination from "../components/pagination/PaginationPage";

export default async function InfraBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const infrabooks = await getInfraBooks(page);
  const itemsPerPage = 10;
  const totalPageCount = 72;
  const baseURL = "infrastructure";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>インフラ・アーキテクチャ</div>
        <div className={styles.book_all_line} />
        <InfraBooks infrabooks={infrabooks} />
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
