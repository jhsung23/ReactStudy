import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Articles from './pages/Articles';
import Series from './pages/Series';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Articles />} />
          <Route path="/series" element={<Series />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
