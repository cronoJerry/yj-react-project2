import { createBrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import Profile from './Profile';
import Home from './Home';
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
]);
export default router;
