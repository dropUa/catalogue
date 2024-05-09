import React from 'react';
import items from '../../../public/goods.json';

import { getFilteredGoods } from '../../shared/helpers/getFilteredGoods';
import { Section } from '../../modules/Section/Section';

export const HomePage: React.FC = React.memo(() => {
  const odnotonni4mm = getFilteredGoods(items.products, [109]);
  const odnotonni5mm = getFilteredGoods(items.products, [114]);
  const odnotonni7mm = getFilteredGoods(items.products, [137]);
  const deko = getFilteredGoods(items.products, [119]);
  const rulonyOdnotonni = getFilteredGoods(items.products, [380]);
  const rulonyMixed = getFilteredGoods(items.products, [438]);
  const mixed = getFilteredGoods(items.products, [139, 128]);
  const marmur = getFilteredGoods(items.products, [1]);
  const kamin = getFilteredGoods(items.products, [142, 3]);
  const dekor = getFilteredGoods(items.products, [140, 143]);
  const dekorSmall = getFilteredGoods(items.products, [79]);
  const derevo = getFilteredGoods(items.products, [149, 141]);
  const steloviDekor = getFilteredGoods(items.products, [2]);
  const pvh = getFilteredGoods(items.products, [148]);
  const lampy = getFilteredGoods(items.products, [823, 1099, 1298]);
  const plintusy = getFilteredGoods(items.products, [145]);
  const plivka = getFilteredGoods(items.products, [398, 598]);
  const termoPlivka = getFilteredGoods(items.products, [599]);
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
      price: 84,
      sizes: ['700х700х4 мм'],
      items: odnotonni4mm,
      sale: 109,
      date: null,
    },
    {
      title: 'Однотонні',
      price: 89,
      sizes: ['700х700х5 мм'],
      items: odnotonni5mm,
      sale: 114,
      date: null,
    },
    {
      title: 'Однотонні',
      price: 99,
      sizes: ['700х700х7 мм'],
      items: odnotonni7mm,
      sale: 137,
      date: null,
    },
    {
      title: 'Однотонні Деко',
      price: 94,
      sizes: ['700х700х5 мм'],
      items: deko,
      sale: 119,
      date: null,
    },
    {
      title: 'Рулони Однотонні',
      price: 380,
      sizes: ['700x3080x4 мм'],
      items: rulonyOdnotonni,
      sale: null,
      date: null,
    },
    {
      title: 'Рулони комбіновані',
      price: 438,
      sizes: ['700x3080x5 мм'],
      items: rulonyMixed,
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
      price: 114,
      sizes: ['700х700', '700х770'],
      items: kamin,
      sale: 142,
      date: null,
    },
    {
      title: 'Декор',
      price: 114,
      sizes: ['700х770'],
      items: dekor,
      sale: 139,
      date: null,
    },
    {
      title: 'Дерево',
      price: 114,
      sizes: ['700х700х5 мм', '700х700х8 мм'],
      items: derevo,
      sale: 149,
      date: null,
    },
    {
      title: 'СТЕЛЬОВІ / ДЕКОР +',
      price: 114,
      sizes: ['700х700'],
      items: steloviDekor,
      sale: 149,
      date: null,
    },
    {
      title: 'ПВХ ПАНЕЛІ',
      price: 114,
      sizes: ['500х500х6 мм', '500х500х13 мм'],
      items: pvh,
      sale: 148,
      date: null,
    },
    {
      title: 'LED Лампи',
      price: '823, 1099, 1298' as unknown as number,
      sizes: ['23 см', '40 см', '60 см'],
      items: lampy,
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
      price: '398, 598' as unknown as number,
      sizes: ['0.6 * 10 м'],
      items: plivka,
      sale: null,
      date: null,
    },
    {
      title: 'Самоклеюча плівка на вікно',
      price: '421, 657' as unknown as number,
      sizes: ['0.6 * 3 м', '0.9 * 3 м'],
      items: termoPlivka,
      sale: null,
      date: null,
    },
    {
      title: 'Настінна плитка',
      price: 79,
      sizes: ['600х300х3 мм'],
      items: dekorSmall,
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

    if (sale) {
      return (
        <Section
          title={title}
          price={price}
          sizes={sizes}
          items={items}
          sale={sale}
          key={`${title}/${index}`}
        />
      );
    }

    if (sale && date) {
      return (
        <Section
          title={title}
          price={price}
          sizes={sizes}
          items={items}
          sale={sale}
          date={date}
          key={`${title}/${index}`}
        />
      );
    }

    return (
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
