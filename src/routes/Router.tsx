import { lazy, Suspense } from 'react';
import { createBrowserRouter, Routes } from 'react-router-dom';

import PageLoading from 'components/page-loading/PageLoading';
import Page from 'components/page/Page';

import paths from 'routes/path';

const Home = lazy(() => import('pages/home/Home'));
const PageNotFound = lazy(() => import('pages/page-not-found/PageNotFound'));

interface Routes {
  path: string;
  element: React.ReactNode;
}

const getRouteElement = (Compoennt: React.ElementType): React.ReactNode => (
  <Suspense fallback={<PageLoading />}>
    <Page>
      <Compoennt />
    </Page>
  </Suspense>
);

const routes: Routes[] = [
  { path: paths.HOME, element: getRouteElement(Home) },
  { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
];

export default createBrowserRouter(routes);
