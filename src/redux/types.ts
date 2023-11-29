import { Size } from 'types';

export interface GetProductsPayload {
  page: number;
  size: number;
}

// TODO: add type from swagger
interface ProductProps {
  id: string;
  title: string;
  price: string;
  size: Size[];
}

export interface ImageItemProps {
  id: string;
  name: string;
  url: string;
}

export interface ImageProps {
  id: string;
  images: ImageItemProps[];
}

export interface GetProductsResponse {
  data: ProductProps[];
}

export interface GetProductsWithImagesProps {
  products: ProductProps[];
  images: ImageProps[];
  error?: boolean;
}
