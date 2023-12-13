import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from './MainLayout';


// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        { element: <Navigate to={'home'} replace />, index: true },
        { path: 'home', element: <Home /> },
        { path: 'destination', element: <Destination /> },
        { path: 'crew', element: <Crew /> },
        { path: 'technology', element: <Technology /> },
      ]
    },
    {
      path: 'design-system',
      element: (
        <DesignSystem />
      ),
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

const Home = Loadable(lazy(() => import('./Home')));
const DesignSystem = Loadable(lazy(() => import('./DesignSystem')));
const Destination = Loadable(lazy(() => import('./Destination')));
const Crew = Loadable(lazy(() => import('./Crew')));
const Technology = Loadable(lazy(() => import('./Technology')));