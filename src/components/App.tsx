import { Routes, Route } from 'react-router-dom';
import { ClothingGrade } from 'components/ClothingGrade/ClothingGrade';
import HomePage from './HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="grade" element={<ClothingGrade />}/>
    </Routes>

  );
}

export default App;
