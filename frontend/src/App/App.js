import './App.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Homepage } from '../Homepage/Homepage'
import { Details } from '../Details/Details'
import { Rsvp } from '../RSVP/Rsvp'
import { Schedule } from '../Schedule/Schedule'
import { Travel } from '../Travel/Travel'
import { Qanda } from '../Qanda/Qanda'

export function App() {
  return (
 <>
 <Routes>
  <Route path='/' element={<Homepage navigate={useNavigate()} />} />
  <Route path='/details' element={<Details navigate={useNavigate()} />} />
  <Route path='/rsvp' element={<Rsvp navigate={useNavigate()} />} />
  <Route path='/schedule' element={<Schedule navigate={useNavigate()} />} />
  <Route path='/travel' element={<Travel navigate={useNavigate()} />} />
  <Route path='/qanda' element={<Qanda navigate={useNavigate()} />} />
 </Routes>
 </>
  );
}
