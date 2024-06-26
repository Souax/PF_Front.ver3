import { ApiResponse } from "../types/types";

/* 全ての本 */
export const getAllBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const allbooks = await res.json();
  return allbooks;
};

/* 基礎本の取得 */
export const getBaseBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/base?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const basebooks = await res.json();
  return basebooks;
};

/*　デザイン本の取得 */
export const getCssBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/design?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const cssbooks = await res.json();
  return cssbooks;
};

/* CSの取得 */
export const getComputerBooks = async (
  page: number = 1
): Promise<ApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/computer_science?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const computerbooks = await res.json();
  return computerbooks;
};

/* フロントエンドの取得 */
export const getFrontBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/front_end?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const frontbooks = await res.json();
  return frontbooks;
};

/* バックエンドの取得 */
export const getBackBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/back_end?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const backbooks = await res.json();
  return backbooks;
};

/* インフラの取得 */
export const getInfraBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/infrastructure?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const infrabooks = await res.json();
  return infrabooks;
};

/* Web開発の取得 */
export const getWebBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/web_development?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const webbooks = await res.json();
  return webbooks;
};

/* 役立つ本の取得 */
export const getUsefulBooks = async (
  page: number = 1
): Promise<ApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/useful_book?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const usefulbooks = await res.json();
  return usefulbooks;
};
