import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { APP_ROUTES } from './appRoutes';

import { MetaTags, Header } from '@shared/components';

const AppRouter = () => {
  const { t } = useTranslation();

  return (
    <Router basename="/">
      <Header />
      <Routes>
        {APP_ROUTES(t).map(({ path, component: Component, title }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <MetaTags title={title || ''}>
                <Component />
              </MetaTags>
            }
          ></Route>
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
