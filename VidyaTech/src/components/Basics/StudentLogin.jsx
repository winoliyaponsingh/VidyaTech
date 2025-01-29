import React from 'react';

const StudentLogin = () => {
  return (
    <>
      <style>
        {`
          /* Global styles */
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: Arial, sans-serif;
          }

          body {
              background-color: grey;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
          }

          /* Container for the form */
          #form-container {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
          }

          /* Box that holds the image and the form */
          #form-box {
              display: flex;
              width: 1000px;
              height: 600px;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          /* Image section (left side) */
          #pic {
              width: 50%;
              background-color: rgb(200, 143, 200); /* Yellow background */
              display: flex;
              justify-content: center;
              align-items: center;
          }

          #pic img {
              width: 80%;
              object-fit: cover;
              border-radius: 8px;
          }

          /* Form section (right side) */
          #form-detail {
              width: 50%;
              background-color: rgb(45, 17, 90); /* Blue background */
              color: white;
              padding: 30px;
              display: flex;
              flex-direction: column;
              justify-content: center;
          }

          #form-detail h1 {
              text-align: center;
              margin-bottom: 30px;
          }

          /* Input fields styling */
          .input-group {
              margin-bottom: 20px;
          }

          .input-group label {
              font-size: 16px;
              margin-bottom: 8px;
              display: block;
          }

          .input-group input {
              width: 100%;
              padding: 10px;
              font-size: 16px;
              border-radius: 5px;
              border: none;
              margin-top: 5px;
          }

          .input-group input:focus {
              outline: none;
              border: 2px solid rgb(200, 143, 200); /* Yellow focus border */
          }

          /* Button styling */
          button {
              padding: 12px;
              background-color: rgb(200, 143, 200); /* Yellow background */
              border: none;
              border-radius: 5px;
              color: rgb(45, 17, 90); /* Blue text */
              font-size: 16px;
              cursor: pointer;
              transition: background-color 0.3s;
          }

          button:hover {
              background-color: rgb(200, 143, 200); /* Darker yellow on hover */
          }

          button:focus {
              outline: none;
          }
        `}
      </style>

      <div id="form-container">
        <div id="form-box">
          <div id="pic">
            {/* Empty div for now */}
          </div>
          <div id="form-detail">
            <h1>Login</h1>
            <form action="action_page.php" method="post">
              <div className="input-group">
                <label htmlFor="email">Email ID:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
