import { createBrowserRouter } from 'react-router-dom';
import About from 'pages/about/About';
import Home from 'pages/home/Home';
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
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
export default router;
