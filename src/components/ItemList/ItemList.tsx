import React from 'react';
import { Item } from '../Item/Item';
import { ItemType } from '../../shared/types/ItemType';
import { Container } from '../../ui/Container/Container';

type Props = {
  items: ItemType[];
};

export const ItemList: React.FC<Props> = React.memo(({ items }) => {
  return (
    <Container className="grid gap-3 mt-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
      {items.map((item) => (
        <Item item={item} key={item.vendorCode} />
      ))}
    </Container>
  );
});
