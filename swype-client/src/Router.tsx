import NotFound from './pages/NotFound';
import Stage from './pages/Stage';
import { createBrowserRouter } from 'react-router-dom';
import StoreMain from './pages/store/StoreMain';
import Quiz from './pages/quiz/Quiz';
import Movie from './pages/Movie';
import Login from './pages/Login';
import SelectedCharacter from './pages/SelectedCharacter';
import PollutedStage from './pages/PollutedStage';
import OAuthControl from './pages/OAuthControl';
import StoreDetail from './pages/store/StoreDetail';
import Charcter from './pages/Charcter';
import Loading from './pages/Loading';
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
