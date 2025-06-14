import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="main-content">
        <div className="profile-section">
          <div className="avatar">
            <div className="avatar-placeholder">S</div>
          </div>
          <h1 className="name">Zhongren Shao</h1>
          <p className="title">Software Engineer</p>
          <p className="bio">
            Just out here trying my best to be better than LLMs.
          </p>
        </div>

        <div className="links-section">
          <a href="mailto:shao.zhongren@gmail.com" className="link">
            <span className="link-icon">✉</span>
            Email
          </a>
          <a
            href="https://github.com/szhongren"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-icon">⚡</span>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shaoz"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-icon">💼</span>
            LinkedIn
          </a>
          <a
            href="https://bsky.app/profile/shaozz.bsky.social"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-icon">🦋</span>
            Bluesky
          </a>
        </div>

        <footer className="footer">
          <p>&copy; 2025 Your Name. Keep it simple.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
