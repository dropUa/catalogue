import React from 'react';
import items from '../../../public/goods.json';

import { getFilteredGoods } from '../../shared/helpers/getFilteredGoods';
import { Section } from '../../modules/Section/Section';

export const HomePage: React.FC = React.memo(() => {
  const odnotonni4mm = getFilteredGoods(items.products, [109]);
  const odnotonni5mm = getFilteredGoods(items.products, [114]);
  const odnotonni7mm = getFilteredGoods(items.products, [137]);
  const deko = getFilteredGoods(items.products, [119]);
  const mixed = getFilteredGoods(items.products, [139, 128]);
  const marmur = getFilteredGoods(items.products, [1]);
  const derevo = getFilteredGoods(items.products, [149, 141]);
  const steloviDekor = getFilteredGoods(items.products, [2]);
  const plintusy = getFilteredGoods(items.products, [145]);

  const sections = [
    {
      title: 'Однотонні',
      price: 109,
      sizes: ['700х700х4 мм'],
      items: odnotonni4mm,
      sale: null,
      date: null,
    },
    {
      title: 'Однотонні',
      price: 114,
      sizes: ['700х700х5 мм'],
      items: odnotonni5mm,
      sale: null,
      date: null,
    },
    {
      title: 'Однотонні',
      price: 137,
      sizes: ['700х700х7 мм'],
      items: odnotonni7mm,
      sale: null,
      date: null,
    },
    {
      title: 'Однотонні Деко',
      price: 119,
      sizes: ['700х700х5 мм'],
      items: deko,
      sale: null,
      date: null,
    },
    {
      title: 'Комбінована цегла',
      price: 139,
      sizes: ['700х770х5 мм', '700х700х5 мм', '690x690x4 мм'],
      items: mixed,
      sale: null,
      date: null,
    },
    {
      title: 'Мармур',
      price: 139,
      sizes: ['700х770х5 мм'],
      items: marmur,
      sale: null,
      date: null,
    },
    {
      title: 'Дерево',
      price: 149,
      sizes: ['700х700х5 мм', '700х700х8 мм'],
      items: derevo,
      sale: null,
      date: null,
    },
    {
      title: 'СТЕЛЬОВІ / ДЕКОР +',
      price: 149,
      sizes: ['700х700'],
      items: steloviDekor,
      sale: null,
      date: null,
    },
    {
      title: 'Плінтуси',
      price: 139,
      sizes: ['2.4 м х 9 см'],
      items: plintusy,
      sale: null,
      date: null,
    },
  ];

  return sections.map((section) => {
    const { title, price, sizes, items, sale, date } = section;

    return sale && date ? (
      <Section
        title={title}
        price={price}
        sizes={sizes}
        items={items}
        sale={sale}
        date={date}
      />
    ) : (
      <Section title={title} price={price} sizes={sizes} items={items} />
    );
  });
});
