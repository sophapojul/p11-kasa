import { createBrowserRouter } from 'react-router-dom';
import About from 'pages/about/About';
import Home, { loader as homeLoader } from 'pages/home/Home';
import Lodging, { loader as lodgingLoader } from 'pages/Lodging';
import ErrorPage from 'pages/error-page/ErrorPage';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: ':id',
        element: <Lodging />,
        loader: lodgingLoader,
      },
    ],
  },
]);
export default router;
