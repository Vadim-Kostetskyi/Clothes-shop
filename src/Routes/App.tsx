import { Routes, Route } from 'react-router-dom';

import { Main } from 'components/Main/Main';
import { ClothingGrade } from 'components/ClothingGrade/ClothingGrade';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="grade" element={<ClothingGrade />}/>
    </Routes>

  );
}

export default App;
