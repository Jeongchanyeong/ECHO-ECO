import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stage from './pages/Stage';
import StoreMain from './pages/store/StoreMain';
import Quiz from './pages/quiz/Quiz';
import Login from './pages/Login';
import CharacterSelection from './pages/CharacterSelection';
import SelectedCharacter from './pages/SelectedCharacter';
import PollutedStage from './pages/PollutedStage';
import StoreDetail from './pages/store/StoreDetail';

export const Router = () => {
  return (
    // 기프티콘 , 영상 , 스플래쉬
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Stage />}
        />
        <Route
          path='/store'
          element={<StoreMain />}
        />
        <Route
          path='/quiz'
          element={<Quiz />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/character'
          element={<CharacterSelection />}
        />
        <Route
          path='/selected'
          element={<SelectedCharacter />}
        />
        <Route
          path='/polluted'
          element={<PollutedStage />}
        />
        <Route
          path='/stage'
          element={<Stage />}
        />
        <Route
          path='/store/:id'
          element={<StoreDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
};
