import React from 'react';

import { ItemType } from '../../shared/types/ItemType';

import { Header } from '../../components/Header/Header';
import { ItemList } from '../../components/ItemList/ItemList';

type Props = {
  title: string;
  sizes: string[];
  items: ItemType[];
  price?: number;
  sale?: number;
  date?: string;
};

export const Section: React.FC<Props> = React.memo(
  ({ title, price, sizes, items, sale, date }) => {
    return (
      <section className="mb-20">
        <Header
          title={title}
          price={price}
          sizes={sizes}
          sale={sale}
          date={date}
        />

        <ItemList items={items} />
      </section>
    );
  }
);
