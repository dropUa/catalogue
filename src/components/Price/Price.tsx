import React from 'react';

type Props = {
  price: number;
  sale?: number;
  date?: string;
};

export const Price: React.FC<Props> = React.memo(({ price, sale, date }) => {
  return (
    <div className="text-white col-span-2 text-center flex items-center lg:gap-44 justify-center">
      {sale && date ? (
        <>
          <p className="font-bold text-3xl">{date}</p>

          <div className="flex justify-between bg-white items-center px-4">
            <p className="text-gray-500 text-4xl line-through">{sale} грн</p>
            <p className="text-red-600 font-bold text-4xl p-2 lg:text-6xl">
              {price} грн
            </p>
          </div>
        </>
      ) : (
        <p className="w-fit bg-white text-red-600 font-bold text-4xl p-2 lg:text-6xl">
          {price} грн
        </p>
      )}
    </div>
  );
});
