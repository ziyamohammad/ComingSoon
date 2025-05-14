

import './App.css';

function App() {
  
  const handleRegister=()=>{
  window.location.href = "https://lu.ma/d7m7dqev";
  }
  return (
    <div className="App">
       <div className="logo">
        <img src="./new logo.png" alt="/" height="100%" width="100%"/>
        <div className="top-right">
          <img src="./top-right.png" alt=""  height="100%" width="100%"/>
        </div>
         <div className="bottom-right">
          <img src="./bottom-right.png" alt="" height="100%" width="100%" />
        </div>
        <div className="top-left">
          <img src="./top-left.png" alt="" height="100%" width="100%" />
        </div>
         <div className="top-left-ball">
          <img src="./top-left-ball.png" alt="" height="100%" width="100%" />
        </div>
        <div className="top-left-ball2">
          <img src="./top-left-ball2.png" alt="" height="100%" width="100%" />
        </div>
         <div className="bottom-left">
          <img src="./bottom-left.png" alt="" height="100%" width="100%" />
        </div>
         <div className="bottom-left-ball">
          <img src="./bottom-left-ball.png" alt="" height="100%" width="100%" />
        </div>
         <div className="bottom-left-ball2">
          <img src="./bottom-left-ball2.png" alt="" height="100%" width="100%" />
        </div>
      </div>
      <h1>Trained & Tuned'25</h1>
      <h2 className="coming">Join our hands-on Python and Machine Learning workshop, designed for beginners. Gain practical skills, build real projects, and take your first step into the world of AI. Free registration.</h2>
      <button className="register" onClick={handleRegister}>Register now</button>
      <div className="query">
      <span>For Any Query</span>
      <span className="number">
        <p>8052587573(Om)</p>
        <p>9917741948(Devroop)</p>
      </span>
      </div>
    </div>
  );
}

export default App;
