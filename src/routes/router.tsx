import { createBrowserRouter } from 'react-router-dom';
import About from 'pages/about/About';
import Home from 'pages/home/Home';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
