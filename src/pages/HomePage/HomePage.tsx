import React from 'react';
import items from '../../../public/goods.json';

import { getFilteredGoods } from '../../shared/helpers/getFilteredGoods';
import { Section } from '../../modules/Section/Section';

export const HomePage: React.FC = React.memo(() => {
  const odnotonni4mm = getFilteredGoods(items.products, 109);
  const odnotonni5mm = getFilteredGoods(items.products, 114);

  return (
    <>
      <Section
        title="Однотонні"
        price={109}
        sizes={['700х700х4 мм']}
        items={odnotonni4mm}
        sale={25}
        date="До 30.01.23"
      />

      <Section
        title="Однотонні"
        price={114}
        sizes={['700х700х5 мм']}
        items={odnotonni5mm}
      />
    </>
  );
});
