import { TFunction } from 'i18next';

import { AppRoute } from '@shared/types';
import * as fromNav from './routes';

import Home from '../containers/home/Home.container';
import NotFound from '../containers/not-found/NotFound.container';

export const APP_ROUTES = (t: TFunction): AppRoute[] => [
  {
    path: fromNav.HOME,
    component: () => <Home />,
    exact: true,
    title: t('meta.title.home'),
  },
  {
    path: '*',
    component: () => <NotFound />,
    title: t('meta.title.not_found'),
  },
];
