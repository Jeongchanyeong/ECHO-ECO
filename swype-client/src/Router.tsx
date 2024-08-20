import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const NotFound = lazy(() => import('./pages/NotFound'));
const Stage = lazy(() => import('./pages/Stage'));
const StoreMain = lazy(() => import('./pages/store/StoreMain'));
const Quiz = lazy(() => import('./pages/contents/Quiz'));
const Movie = lazy(() => import('./pages/contents/Movie'));
const Login = lazy(() => import('./pages/login/Login'));
const SelectedCharacter = lazy(() => import('./pages/character/SelectedCharacter'));
const PollutedStage = lazy(() => import('./pages/PollutedStage'));
const OAuthControl = lazy(() => import('./pages/login/OAuthControl'));
const StoreDetail = lazy(() => import('./pages/store/StoreDetail'));
const Charcter = lazy(() => import('./pages/character/Charcter'));
const Loading = lazy(() => import('./pages/login/Loading'));
const Splash = lazy(() => import('./pages/Splash'));

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
