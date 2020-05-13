import React, { useEffect } from 'react';
import { Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as ProductActions from '../store/modules/products/actionCreators';

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector(({ products }) => ({
    products,
  }));

  useEffect(() => {
    dispatch(ProductActions.loadListRequest());
  }, []);

  return (
    <>
      <Text style={{ fontSize: 14 }}>{JSON.stringify(products)}</Text>
    </>
  );
}

export default ProductList;
