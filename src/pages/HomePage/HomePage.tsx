import React from 'react';
import items from '../../../public/goods.json';

import { Header } from '../../components/Header/Header';
import { ItemList } from '../../components/ItemList/ItemList';

import { getFilteredGoods } from '../../shared/helpers/getFilteredGoods';

export const HomePage: React.FC = React.memo(() => {
  const filteredItems = getFilteredGoods(items.products, 109);

  return (
    <>
      <Header title="Однотонні" price="109 грн" sizes={['700x770x4 мм']} />

      <ItemList items={filteredItems} />
    </>
  );
});
