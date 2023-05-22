import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import Profile from './Profile';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
