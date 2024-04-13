
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import GetBurn from './components/GetBurn';
import Goals from './components/Goals';
import Login from './components/Login';
import Register from './components/Register';
import TrackGoal from './components/TrackGoal';
import WorkoutTracker from './components/WorkoutTracker';
import Calendar from './components/Calendar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GetBurn/>} path='/getburn'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Goals/>} path='/goals'/>
          <Route element={<Register/>} path='/register'/>
          <Route element={<TrackGoal/>} path='/'/>
          <Route element={<WorkoutTracker/>} path='/workout'/>
          <Route element={<Calendar/>} path='/calendar'/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
