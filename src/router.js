import { createBrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import Profile from './Profile';
import Home from './Home';
import Detail from './detail';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
]);
export default router;
