import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';

import Footer from './Footer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Footer />} />
    </Routes>

  );
}

export default App;
