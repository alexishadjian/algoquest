import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReponsePage from './pages/ReponsePage';

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
            
            <Route path="/reponse/:id" element={<ReponsePage />} />
            
          )
        )
      } />
    </div>
  );
}

export default App;