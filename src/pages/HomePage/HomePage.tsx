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
  const kamin = getFilteredGoods(items.products, [142, 3]);
  const dekor = getFilteredGoods(items.products, [140, 143]);
  const dekorSmall = getFilteredGoods(items.products, [79]);
  const derevo = getFilteredGoods(items.products, [149, 141]);
  const steloviDekor = getFilteredGoods(items.products, [2]);
  const pvh = getFilteredGoods(items.products, [148]);
  const plintusy = getFilteredGoods(items.products, [145]);
  const plivka = getFilteredGoods(items.products, [398, 598]);
  const dzerkala = getFilteredGoods(items.products, [89, 338]);

  // console.log(
  //   odnotonni4mm.length +
  //     odnotonni5mm.length +
  //     odnotonni7mm.length +
  //     deko.length +
  //     mixed.length +
  //     marmur.length +
  //     kamin.length +
  //     dekor.length +
  //     derevo.length +
  //     steloviDekor.length +
  //     plintusy.length +
  //     plivka.length +
  //     dzerkala.length
  // );

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
      title: 'Камінь',
      price: 142,
      sizes: ['700х700', '700х770'],
      items: kamin,
      sale: null,
      date: null,
    },
    {
      title: 'Декор',
      price: 139,
      sizes: ['700х770'],
      items: dekor,
      sale: null,
      date: null,
    },
    {
      title: 'Декор',
      price: 79,
      sizes: ['600х300 мм'],
      items: dekorSmall,
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
      title: 'ПВХ ПАНЕЛІ',
      price: 139,
      sizes: ['500х500х6 мм', '500х500х13 мм'],
      items: pvh,
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
    {
      title: 'Самоклеюча плівка / фольга',
      price: 139,
      sizes: ['0.6 * 10 м'],
      items: plivka,
      sale: null,
      date: null,
    },
    {
      title: 'Дзеркала',
      price: '89, 338' as unknown as number,
      sizes: ['265х265х2 мм', '400x600x2 мм'],
      items: dzerkala,
      sale: null,
      date: null,
    },
  ];

  return sections.map((section, index) => {
    const { title, price, sizes, items, sale, date } = section;

    return sale && date ? (
      <Section
        title={title}
        price={price}
        sizes={sizes}
        items={items}
        sale={sale}
        date={date}
        key={`${title}/${index}`}
      />
    ) : (
      <Section
        key={`${title}/${index}`}
        title={title}
        price={price}
        sizes={sizes}
        items={items}
      />
    );
  });
});
