import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';

import HomePage from './pages/Home';
import PlayPage from './pages/Play';


function App() {

  return (
    <div className="App">
      
      <RouterProvider router={
        createBrowserRouter(
          createRoutesFromElements(
            
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/play/:id" element={<PlayPage />} />
            </Route>
          )
        )
      } />
    </div>
  );
}

export default App;