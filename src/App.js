import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Company from './components/Company';
import Mine from './components/Mine';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tuinexpress" element={<Company />} />
        <Route path="/myassignment" element={<Mine />} />
      </Routes>
    </Router>
  );
}

export default App;
