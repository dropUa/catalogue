import React from 'react';
import { Container } from '../../ui/Container/Container';
import { Price } from '../Price/Price';

type Props = {
  title: string;
  sizes: string[];
  price: number;
  sale?: number;
  date?: string;
};

const classNames = {
  textClassName: 'text-white font-bold text-xl sm:text-2xl xl:text-4xl',
};

export const Header: React.FC<Props> = React.memo(
  ({ title, price, sale, date, sizes }) => {
    return (
      <Container className="sticky top-0 grid grid-cols-2 sm:flex sm:justify-between z-10 bg-blue items-center py-4 gap-y-2">
        <h2
          className={`${classNames.textClassName} col-span-1 row-span-1 uppercase`}
        >
          {title}
        </h2>

        {date && <Price price={price as number} date={date} />}

        {sale && <Price price={price as number} sale={sale} />}

        {sale && date && (
          <Price price={price as number} sale={sale} date={date} />
        )}

        {!sale && !date && <Price price={price as number} />}

        <div className="col-start-2 row-span-1 row-start-1 flex flex-col gap-6">
          {sizes.map((size, index) => (
            <p
              key={`${size}/${index}`}
              className={`${classNames.textClassName} text-right block`}
            >
              {size}
            </p>
          ))}
        </div>
      </Container>
    );
  }
);
