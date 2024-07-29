import { Quantities } from 'redux/types';

export type SoppingCardQuantity = {
  quantity: string[];
};

type SplitProductsInfo = {
  id: string;
  size: string;
  color: string;
  quantity: number;
};

type Accumulator = {
  [key: string]: { productId: string; quantities: Quantities };
};

const regex = /(\w{24})(black|white|Black|White)([A-Za-z]+)/;

export const splitInfo = (productsForOrdering: SoppingCardQuantity) => {
  const productsInfo = Object.keys(productsForOrdering.quantity);
  const matches = productsInfo.map(el => el.match(regex));

  const parsedProducts = matches.reduce(
    (acc, match) => {
      if (match) {
        acc[match[0]] = {
          id: match[1],
          color: match[2],
          size: match[3],
          quantity:
            +productsForOrdering.quantity[
              match[0] as keyof typeof productsForOrdering.quantity
            ],
        };
      }
      return acc;
    },
    {} as Record<
      string,
      { id: string; color: string; size: string; quantity: number }
    >,
  );

  const splitProductsInfo: SplitProductsInfo[] = productsInfo.map(
    id => parsedProducts[id],
  );

  const itemMap = splitProductsInfo.reduce<Accumulator>((acc, el) => {
    if (!acc[el.id]) {
      acc[el.id] = { productId: el.id, quantities: {} };
    }
    acc[el.id].quantities[el.size] =
      (acc[el.id].quantities[el.size] || 0) + el.quantity;
    return acc;
  }, {});

  const orderItems = Object.values(itemMap);

  return orderItems;
};
