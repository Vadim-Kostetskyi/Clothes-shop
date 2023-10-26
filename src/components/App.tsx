import { Routes, Route } from 'react-router-dom';

import './App.css'
import HomePage from './HomePage';

import { Footer } from './Footer/Footer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Footer />} />
    </Routes>

  );
}

export default App;
