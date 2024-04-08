"use client";
import { useRouter } from "next/navigation";

function PaginationComponent({
  currentPage,
  totalDataCount,
  itemsPerPage,
  baseURL,
}: any) {
  const router = useRouter();
  const lastPageNumber = Math.ceil(totalDataCount / itemsPerPage);
  const isPreviousDisabled = currentPage <= 1;
  const currentPageNumber = parseInt(currentPage, 10);
  const isNextDisabled = currentPageNumber >= lastPageNumber;

  // 前のページへ遷移
  function handlePrevious() {
    if (currentPageNumber > 1) {
      window.location.href = `/${baseURL}?page=${currentPageNumber - 1}`;
    }
  }

  // 次のページへ遷移
  function handleNext() {
    const isNextDisabled = currentPageNumber >= lastPageNumber;
    if (!isNextDisabled) {
      window.location.href = `/${baseURL}?page=${currentPageNumber + 1}`;
    }
  }

  return (
    <div className="flex justify-center mt-[6rem] text-white">
      <button
        className="mx-[3.4rem] bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg text-center"
        onClick={handlePrevious}
        disabled={isPreviousDisabled}
      >
        ＜ 前のページへ
      </button>
      <button
        className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg text-center"
        onClick={handleNext}
        disabled={isNextDisabled}
      >
        次のページへ ＞
      </button>
    </div>
  );
}
export default PaginationComponent;
