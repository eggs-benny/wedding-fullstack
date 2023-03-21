import './App.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Homepage } from '../Homepage/Homepage'

export function App() {
  return (
 <>
 <Routes>
  <Route path='/' element={<Homepage navigate={useNavigate()} />} />
 </Routes>
 </>
  );
}
