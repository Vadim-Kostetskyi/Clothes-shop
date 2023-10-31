import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import HomePage from './HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>

  );
}

export default App;
