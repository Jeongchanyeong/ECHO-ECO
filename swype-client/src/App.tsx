import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { Suspense } from 'react';
import LoadingSpinner from './components/common/LoadingSpinner';

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
