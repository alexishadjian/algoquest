import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReponsePage from './pages/ReponsePage';
import RootLayout from './layouts/RootLayout';

import HomePage from './pages/Home';
import PlayPage from './pages/Play';

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/reponse/:id" element={<ReponsePage />} />
//     </Routes>
//   </Router>
// );

// export default App;

function App() {

  // const [user, setUser] = useState(false);

  return (
    <div className="App">
      
      <RouterProvider router={
        createBrowserRouter(
          createRoutesFromElements(
            
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/play/:id" element={<PlayPage />} />
              <Route path="/reponse/:id" element={<ReponsePage />} />
            
            </Route>
          )
        )
      } />
    </div>
  );
}

export default App;