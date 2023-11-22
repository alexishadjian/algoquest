import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';

import ReponsePage from './pages/ReponsePage';
import RootLayout from './layouts/RootLayout';

import HomePage from './pages/Home';
import PlayPage from './pages/Play';
import HelpPage from './pages/Help';


function App() {

  return (
    <div className="App">
      
      <RouterProvider router={
        createBrowserRouter(
          createRoutesFromElements(
            
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/play/:id" element={<PlayPage />} />
              <Route path="/reponse/:id" element={<ReponsePage />} />
              <Route path="/help" element={<HelpPage />} />
            </Route>
          )
        )
      } />
    </div>
  );
}

export default App;