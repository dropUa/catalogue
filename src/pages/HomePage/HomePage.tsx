import React from 'react';
import { Header } from '../../components/Header/Header';

export const HomePage: React.FC = React.memo(() => {
  return (
    <Header
      title="Однотонні"
      price="123 грн"
      sizes={['700x700x5 мм', '700x700x5 мм']}
    />
  );
});
