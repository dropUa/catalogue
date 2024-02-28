import React from 'react';
import { ItemType } from '../../shared/types/ItemType';

type Props = {
  item: ItemType;
};

export const Item: React.FC<Props> = React.memo(({ item }) => {
  const { vendorCode, img } = item;

  return (
    <div
      className="relative bg-cover bg-clip-border bg-origin-border bg-no-repeat bg-top pb-[100%]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute bottom-0 left-0 bg-blue text-white px-2 py-1 font-bold text-4xl sm:text-xl">
        {vendorCode}
      </div>
    </div>
  );
});
