import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import StudentLogin from './components/Basics/StudentLogin';
import TeacherLogin from './components/Basics/TeacherLogin';
import StudentSignup from './components/Basics/StudentSignup';
import MainPage from './components/Basics/MainPage';
import RailwayConcessionForm from './components/Features/RailwayConcession';
import View_Notes_Student from './components/Features/View_Notes_Student';
import Upload_Notes_Teacher from './components/Features/Upload_Notes_Teacher';
import FrontPage from './components/Basics/FrontPage';
 
const App = () => {
  return (
    <div className='App'>
     {/*<Router>
        <Routes>
          <Route path="/student" element={<StudentLogin />} />
          <Route path="/teacher" element={<TeacherLogin />} />
          <Route path="/studentSignup" element={<StudentSignup />} />
          <Route path="/" element={<MainPage />} /> 
        </Routes>
      </Router> */} 
<MainPage/>


    </div>
  );
};

export default App;
