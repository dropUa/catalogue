import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages';
import { App } from './App';

export const Root: React.FC = React.memo(() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
});
