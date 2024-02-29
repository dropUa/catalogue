import React from 'react';

import { ItemType } from '../../shared/types/ItemType';

import { Header } from '../../components/Header/Header';
import { ItemList } from '../../components/ItemList/ItemList';

type Props = {
  title: string;
  price: number;
  sizes: string[];
  items: ItemType[];
};

export const Section: React.FC<Props> = React.memo(
  ({ title, price, sizes, items }) => {
    return (
      <section className="mb-20">
        <Header title={title} price={price} sizes={sizes} />

        <ItemList items={items} />
      </section>
    );
  }
);
