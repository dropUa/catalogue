import { ItemType } from '../types/ItemType';

export const getFilteredGoods = (goods: ItemType[], price: number[]) => {
  return goods
    .filter((item) => price.includes(+item.retail_price) && +item.quantity > 0)
    .sort(
      (a, b) =>
        +a.vendorCode.slice(0, a.vendorCode.indexOf('-')) -
        +b.vendorCode.slice(0, b.vendorCode.indexOf('-'))
    );
};
