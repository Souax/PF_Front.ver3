import Image from "next/image";
import styles from "../../AllBooks/AllBooks.module.css";
import NuxtBooks from "./Nuxt";
import { getNuxtBooks } from "@/app/components/api/ProgrammingAPI";
import PaginationComponent from "@/app/components/pagination/PaginationComponent";

export default async function NuxtBook({ params, searchParams }: any) {
  const page = searchParams?.page ? searchParams.page : 1;
  const nuxtbooks = await getNuxtBooks(page);
  const totalDataCount = 2;
  const itemsPerPage = 10;
  const baseURL = "categories/nuxtjs";

  return (
    <>
      <div className="pt-10">
        <div className={styles.book_all_title}>Nuxt.js</div>
        <div className={styles.book_all_line} />
        <NuxtBooks nuxtbooks={nuxtbooks} />
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
