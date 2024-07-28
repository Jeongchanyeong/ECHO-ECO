import NotFound from './pages/NotFound';
import Stage from './pages/Stage';
import { createBrowserRouter } from 'react-router-dom';
import StoreMain from './pages/store/StoreMain';
import Quiz from './pages/contents/Quiz';
import Movie from './pages/contents/Movie';
import Login from './pages/login/Login';
import SelectedCharacter from './pages/character/SelectedCharacter';
import PollutedStage from './pages/PollutedStage';
import OAuthControl from './pages/login/OAuthControl';
import StoreDetail from './pages/store/StoreDetail';
import Charcter from './pages/character/Charcter';
import Loading from './pages/login/Loading';
import Splash from './pages/Splash';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Splash />,
    errorElement: <NotFound />,
  },
  {
    path: '/loginwait',
    element: <Loading />,
  },
  {
    path: '/store',
    element: <StoreMain />,
  },
  {
    path: '/quiz',
    element: <Quiz />,
  },
  {
    path: '/movie',
    element: <Movie />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/character',
    element: <Charcter />,
  },
  {
    path: '/selected',
    element: <SelectedCharacter />,
  },
  {
    path: '/polluted',
    element: <PollutedStage />,
  },
  {
    path: '/stage',
    element: <Stage />,
  },
  {
    path: '/store/:id',
    element: <StoreDetail />,
  },
  {
    path: '/oauth/callback/kakao',
    element: <OAuthControl />,
  },
  {
    path: '/oauth/callback/naver',
    element: <OAuthControl />,
  },
  {
    path: '/oauth/callback/google',
    element: <OAuthControl />,
  },
]);
