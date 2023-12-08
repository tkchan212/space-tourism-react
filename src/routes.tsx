import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';


// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

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
      element: (
        <Home />
      ),
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