import React from 'react';

const MainPage = () => {
  return (
    <div className="main-container">
      <header>
        <div className="logo">
          <h1>VidyaTech</h1>
        </div>
       
      </header>

      <main>
        <div className="leftBox">
          <p className="mainTitle">VidyaTech</p>
          <p className="mainSlogan">Where Wisdom Transforms</p>
          <p className="mainPurpose">
            Our website is designed to bridge the gap between teachers and students
            by providing a platform where teachers can share their notes, resources, and
            teaching materials, and students can review and provide feedback.
          </p>
          <div className="mainButtons">
            <input type="submit" className="mainBtn" id="fee" value="Fee Payment" />
            <input type="submit" className="mainBtn" id="railway" value="Concession" />
            <input type="submit" className="mainBtn" id="notes" value="Notes" />
          </div>
        </div>

        <div className="rightBox">
          <div className="intro-text">
            <p>Welcome to VidyaTech! Your gateway to learning and teaching innovation.</p>
          </div>
        </div>
      </main>

      <footer></footer>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .main-container {
          height: 100vh;
          background-color: rgb(200, 143, 200);
          display: flex;
          flex-direction: column;
        }

        header {
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: rgb(45, 17, 90);
          color: white;
          padding: 0 20px;
        }

        .logo h1 {
          font-family: 'Merriweather', serif;
          font-size: 2rem;
        }

        .login {
          display: flex;
          gap: 10px;
        }

        .login input {
          height: 45px;
          width: 120px;
          border-radius: 50px;
          font-weight: 700;
          background-color: white;
          color: rgb(45, 17, 90);
          cursor: pointer;
        }

        .login input:hover {
          background-color: rgb(205, 57, 218);
          color: white;
        }

        main {
          display: flex;
          justify-content: space-between;
          padding: 40px;
        }

        .leftBox {
          max-width: 50%;
        }

        .mainTitle {
          font-family: 'Merriweather', serif;
          font-weight: 700;
          font-size: 3rem;
        }

        .mainSlogan {
          font-family: 'Ubuntu', serif;
          font-weight: 400;
          font-size: 1.2rem;
          margin-top: 8px;
        }

        .mainPurpose {
          font-family: 'Merriweather', serif;
          font-size: 1rem;
          margin-top: 30px;
        }

        .mainButtons {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        .mainBtn {
          padding: 12px;
          width: 120px;
          border-radius: 50px;
          background-color: rgb(45, 17, 90);
          color: wheat;
          border: none;
          cursor: pointer;
        }

        .mainBtn:hover {
          background-color: rgb(205, 57, 218);
        }

        .rightBox {
          max-width: 45%;
        }

        .intro-text {
          padding: 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          font-family: 'Ubuntu', sans-serif;
          font-size: 1.1rem;
        }

        footer {
          height: 60px;
          background-color: rgb(45, 17, 90);
        }
      `}</style>
    </div>
  );
};

export default MainPage;
