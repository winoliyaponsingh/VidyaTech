import React from 'react'

const View_Notes_Student = () => {

    const notes = [
        { title: 'Data Structures and Algorithms', content: 'These notes cover the basics of data structures like arrays, linked lists, stacks, and queues, as well as algorithm design and analysis techniques.' },
        { title: 'Operating Systems', content: 'These notes delve into the functions of operating systems, including process management, memory management, and file systems.' },
        { title: 'Computer Networks', content: 'These notes discuss the fundamentals of computer networks, protocols, and communication technologies.' },
        { title: 'Database Management Systems', content: 'These notes cover relational databases, SQL queries, normalization, and database design concepts.' },
        { title: 'Digital Logic Design', content: 'These notes explain Boolean algebra, logic gates, combinational circuits, and sequential circuits.' },
        { title: 'Software Engineering', content: 'These notes cover software development life cycles, methodologies, testing, and project management in software engineering.' },
        { title: 'Computer Architecture', content: 'These notes focus on the structure and organization of computer systems, including CPU, memory hierarchy, and instruction sets.' },
        { title: 'Discrete Mathematics', content: 'These notes cover mathematical concepts essential for computer science, including sets, graphs, logic, and combinatorics.' },
        { title: 'Machine Learning and AI', content: 'These notes explore the basics of machine learning algorithms, AI techniques, and data analysis.' },
        { title: 'Cybersecurity', content: 'These notes cover the principles of securing computer systems, cryptography, network security, and risk management.' }
    ];
      

  return (
      <div style={styles.pageContainer}>
          <h2 style={styles.heading}>Study Notes</h2>
          <div style={styles.notesContainer}>
              {notes.map((note, index) => (
                  <div key={index} style={styles.noteCard}>
                      <h3 style={styles.noteTitle}>{note.title}</h3>
                      <p style={styles.noteContent}>{note.content}</p>
                      <a href="https://gordianknot.stanford.edu/sites/g/files/sbiybj22971/files/media/file/Artificial%20Intelligence-Machine%20Learning%20Explained.pdf" style={styles.link}>Download PDF</a>
                  </div>
              ))}
          </div>
      </div>
  );
};

const styles = {
  pageContainer: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f9',
      padding: '20px',
  },
  heading: {
      textAlign: 'center',
      color: '#2c3e50',
  },
  notesContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '20px',
  },
  noteCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',
  },
  noteTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#34495e',
  },
  noteContent: {
      fontSize: '14px',
      color: '#7f8c8d',
      marginBottom: '10px',
  },
  link: {
      fontSize: '14px',
      color: '#2980b9',
      textDecoration: 'none',
      fontWeight: 'bold',
  },
};


export default View_Notes_Student

