export interface GetProductsPayload {
  page: number;
  size: number;
}

// TODO: add type from swagger
interface ProductProps {
  id: string;
}
// TODO: add type from swagger
interface ImageProps {}

export interface GetProductsResponse {
  data: ProductProps[];
}

export interface GetProductsWithImagesProps {
  products: ProductProps[];
  images: ImageProps[];
  error?: boolean;
}
