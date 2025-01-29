import { useRef } from 'react';
import { jsPDF } from 'jspdf';
import './RailwayConcession.css';

function RailwayConcessionForm() {
    const formRef = useRef();

    const generatePDF = () => {
        const doc = new jsPDF();
        const form = formRef.current;
        
        const name = form.name.value;
        const dob = form.dob.value;
        const studentId = form.studentId.value;
        const institute = form.institute.value;
        const course = form.course.value;
        const destination = form.destination.value;
        
        doc.text("Railway Concession Form", 10, 10);
        doc.text(`Name: ${name}`, 10, 20);
        doc.text(`Date of Birth: ${dob}`, 10, 30);
        doc.text(`Student ID: ${studentId}`, 10, 40);
        doc.text(`Institute: ${institute}`, 10, 50);
        doc.text(`Course: ${course}`, 10, 60);
        doc.text(`Destination: ${destination}`, 10, 70);
        
        doc.save("Railway_Concession_Form.pdf");
    };

    return (
        <div className="container">
            <h2>Railway Concession Form</h2>
            <form ref={formRef}>
                <label>Name:</label>
                <input type="text" name="name" required />
                
                <label>Date of Birth:</label>
                <input type="date" name="dob" required />
                
                <label>Student ID:</label>
                <input type="text" name="studentId" required />
                
                <label>Institute Name:</label>
                <input type="text" name="institute" required />
                
                <label>Course Name:</label>
                <input type="text" name="course" required />
                
                <label>Destination:</label>
                <input type="text" name="destination" required />
                
                <button type="button" onClick={generatePDF}>Download PDF</button>
            </form>
        </div>
    );
}

export default RailwayConcessionForm;
