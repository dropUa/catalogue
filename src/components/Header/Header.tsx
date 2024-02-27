import React from 'react';
import { Container } from '../../ui/Container/Container';

type Props = {
  title: string;
  price?: string;
  sizes: string | string[];
};

const classNames = {
  textClassName: 'text-white font-bold text-xl sm:text-2xl xl:text-4xl',
};

export const Header: React.FC<Props> = React.memo(({ title, price, sizes }) => {
  return (
    <Container className="sticky top-0 grid grid-cols-2 grid-rows-2 sm:flex sm:justify-between bg-blue items-center py-4 gap-y-4">
      <h2 className={`${classNames.textClassName} col-span-1 row-span-1`}>
        {title}
      </h2>

      {price && (
        <div className="text-white col-span-2 text-center flex justify-center">
          <p className="w-fit bg-white text-red-600 font-bold text-4xl p-2 lg:text-6xl">
            {price}
          </p>
        </div>
      )}

      {Array.isArray(sizes) ? (
        <div className="col-start-2 row-span-1 row-start-1">
          {sizes.map((size, index) => (
            <p
              key={`${size}/${index}`}
              className={`${classNames.textClassName} text-right`}
            >
              {size}
            </p>
          ))}
        </div>
      ) : (
        <p
          className={`${classNames.textClassName} col-start-2 row-span-1 row-start-1 text-right`}
        >
          {sizes}
        </p>
      )}
    </Container>
  );
});
