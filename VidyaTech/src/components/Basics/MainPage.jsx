import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  // Function to navigate to the student page
  const goToStudent = () => {
    navigate('/student');  // Navigate to /student
  };

  // Function to navigate to the teacher page
  const goToTeacher = () => {
    navigate('/teacher');  // Navigate to /teacher
  };

  const goToStudentSignup = () => {
    navigate('/studentSignup');
  };

  return (
    <div>
      <p>Main Page</p>
      <button onClick={goToStudent}>Go to Student Page</button>
      <button onClick={goToTeacher}>Go to Teacher Page</button>
      <button onClick={goToStudentSignup}>Go to Student Signup Page</button>
    </div>
  );
}

export default MainPage;
