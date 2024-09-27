import StandardPage from './components/pages/standardPage/standardPage';
import JulekurvKartotekPage from './components/pages/julekurvKartotekPage/julekurvKartotekPage';
import JulekurvPage from './components/pages/julekurvPage/julekurvPage';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <h1>Hei</h1>,
  },
  {
    path: 'kontakt-oss',
    element: <StandardPage pageType={'contact'} />,
  },
  {
    path: 'om-siden',
    element: <StandardPage pageType={'about'} />,
  },
  {
    path: 'julekurver',
    element: <JulekurvKartotekPage />,
    children: [
      {
        path: ':name',
        element: <JulekurvPage />,
      },
    ],
  },
];
