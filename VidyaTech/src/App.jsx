import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import StudentLogin from './components/Basics/StudentLogin';
import TeacherLogin from './components/Basics/TeacherLogin';
import StudentSignup from './components/Basics/StudentSignup';
import MainPage from './components/Basics/MainPage';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/student" element={<StudentLogin />} />
          <Route path="/teacher" element={<TeacherLogin />} />
          <Route path="/studentSignup" element={<StudentSignup />} />
          <Route path="/" element={<MainPage />} /> {/* Correct syntax */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
