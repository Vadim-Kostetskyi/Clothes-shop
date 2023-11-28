import React from 'react';
import { useGetFilesByIdQuery } from 'redux/filesApi';
import { useGetProductsByNameQuery } from 'redux/productsApi';

const Productscards = () => {
  const { data } = useGetProductsByNameQuery({ page: 0, size: 9 });
  console.log(data, 'data');
  const { data: data1 } = useGetFilesByIdQuery('655f780359adbf82bcf2c3b6');
  console.log(data1, 'fdjfhd');
  return <></>;
};

export default Productscards;
