import { PageNumbers } from 'utils/constants';

const createPagesList = (pagesAmount: PageNumbers) => {
  const pagesArray: number[] = [];
  for (let i = 1; i <= Number(pagesAmount); i++) {
    pagesArray.push(i);
  }
  return pagesArray;
};

export { createPagesList };
