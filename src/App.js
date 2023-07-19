import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Card from './components/Card';

const Portfolio = () => (
  <div>
    <Card />
  </div>
);

const Projects = () => (
  <div>
    <Card />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header className="App-header">
        </header> */}

        <main>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
