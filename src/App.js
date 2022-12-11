import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analyse from './components/Analyse';
import Design from './components/Design';
import Realisation from './components/Realisation';
import Tooling from './components/Tooling';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyse" element={<Analyse />} />
        <Route path="/design" element={<Design />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/tooling" element={<Tooling />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
