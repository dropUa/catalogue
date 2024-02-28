import { ItemType } from '../types/ItemType';

export const getFilteredGoods = (goods: ItemType[], price: number) => {
  return goods
    .filter((item) => +item.retail_price === price)
    .sort(
      (a, b) =>
        +a.vendorCode.slice(0, a.vendorCode.indexOf('-')) -
        +b.vendorCode.slice(0, b.vendorCode.indexOf('-'))
    );
};
