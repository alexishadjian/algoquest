import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReponsePage from './pages/ReponsePage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/reponse/:id" element={<ReponsePage />} />
    </Routes>
  </Router>
);

export default App;