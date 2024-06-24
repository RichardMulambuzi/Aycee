import { StaticImport } from "next/dist/shared/lib/get-img-props";
export interface Products {
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  description: string;
  category: string;
  image: string | StaticImport;
  rating: number;
  quantity: number;
}

export interface ItemProps {
  item: Products;
}

export interface StateProps {
  shopping: {
    productData: Products[];
    userInfo: {};
    orderData: {
      order: Products[];
    };
  };
}
