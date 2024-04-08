"use client";

function Pagination({
  currentPage,
  totalPageCount, // 合計ページ数を直接受け取る
  baseURL,
}: any) {
  const currentPageNumber = parseInt(currentPage, 10);
  const isPreviousDisabled = currentPageNumber <= 1;
  const isNextDisabled = currentPageNumber >= totalPageCount;

  // 前のページへ遷移
  function handlePrevious() {
    if (!isPreviousDisabled) {
      window.location.href = `/${baseURL}?page=${currentPageNumber - 1}`;
    }
  }

  // 次のページへ遷移
  function handleNext() {
    if (!isNextDisabled) {
      window.location.href = `/${baseURL}?page=${currentPageNumber + 1}`;
    }
  }

  return (
    <div className="flex justify-center mt-[6rem] text-white">
      <button
        className={`mx-[3.4rem] bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg text-center ${
          isPreviousDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePrevious}
        disabled={isPreviousDisabled}
      >
        ＜ 前のページへ
      </button>
      <button
        className={`bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg text-center ${
          isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNext}
        disabled={isNextDisabled}
      >
        次のページへ ＞
      </button>
    </div>
  );
}

export default Pagination;
