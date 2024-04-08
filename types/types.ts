export type BookType = {
  title: string;
  titleKana: string;
  subTitle: string;
  subTitleKana: string;
  seriesName: string;
  seriesNameKana: string;
  contents: string;
  author: string;
  authorKana: string;
  publisherName: string;
  size: string;
  isbn: string;
  itemCaption: string;
  salesDate: string;
  itemPrice: number;
  listPrice: number;
  discountRate: number;
  discountPrice: number;
  itemUrl: string;
  affiliateUrl: { url: string };
  smallImageUrl: { url: string };
  mediumImageUrl: { url: string };
  largeImageUrl: string;
  chirayomiUrl: { url: string };
  availability: string;
  postageFlag: number;
  limitedFlag: number;
  reviewCount: number;
  reviewAverage: number;
  booksGenreId: string;
};

export type ApiResponse = {
  status: string;
  data: { params: BookType }[];
};
