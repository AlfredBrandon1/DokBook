import './App.css';

//routing
import { Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home';
import MyPatients from './pages/MyPatients'
import AddPatient from './pages/AddPatient'
import PatientProfile from './pages/PatientProfile';
import MyCalendar from './pages/MyCalendar';
import About from './pages/About'
import Login from "./pages/Login";

const App =() => {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path='/home' element = {<Home/>}> </Route>
          <Route path='/my-patients' element = {<MyPatients/>}> </Route> 
          <Route path='/add-patient' element = {<AddPatient/>}> </Route>
          <Route path ='/calendar' element = {<MyCalendar/>}> </Route>
          <Route path ='/about' element = {<About/>}> </Route>
          <Route path="/:id" element = {<PatientProfile/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
