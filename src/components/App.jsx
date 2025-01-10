import "./App.css";
import { Hero } from "./common/Hero";
import { Quote } from "./common/Quote";
import { Navbar, nav } from "./common/Nav";
import { FadeIn } from "./common/ScrollAnimation";
import Credits from "./common/Credits";

const bgStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "#000",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23171717'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
  zIndex: -2,
};

const appStyle = {
  position: "relative",
  minHeight: "100vh",
  color: "#fff",
  zIndex: 1,
};

const contentStyle = {
  position: "relative",
  zIndex: 2,
  minHeight: "100vh",
};

const projectInfoStyle = {
  textAlign: "center",
  padding: "2rem",
  borderRadius: "10px",
  margin: "2rem auto",
  maxWidth: "800px",
};

const titleStyle = {
  fontSize: "2.5rem",
  marginBottom: "1.5rem",
  color: "#fff",
  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
};

const detailStyle = {
  fontSize: "1.2rem",
  marginBottom: "1rem",
  color: "#f0f0f0",
  lineHeight: "1.8",
};

const App = () => {
  return (
    <>
      <div style={bgStyle} />
      <div style={appStyle} className="app-container">
        <div style={contentStyle}>
          <Navbar pages={nav} />
          <Hero image="/assets/geneva.jpg">2025 NHD</Hero>
          <div className="scroll-indicator">
            <span>scroll down</span>
          </div>
          <div className="center">
            <div className="main">
              <FadeIn delay={200}>
                <Quote author="Henry Dunant">
                  Suffering is universal, and the Red Cross strives to give
                  assistance and protection to all those who suffer, wherever
                  they may be.
                </Quote>
              </FadeIn>
              <FadeIn delay={400}>
                <div style={projectInfoStyle}>
                  <h1 style={titleStyle}>2025 NHD</h1>
                  <div style={detailStyle}>
                    <strong>TOPIC:</strong> THE FIRST GENEVA CONVENTION
                  </div>
                  <div style={detailStyle}>
                    <strong>THEME:</strong> RIGHTS AND RESPONSIBILITIES
                  </div>
                  <div style={detailStyle}>
                    <strong>WORD COUNT:</strong> 1,375
                  </div>
                  <div style={detailStyle}>
                    <strong>DIVISION:</strong> JUNIOR
                  </div>
                  <div style={detailStyle}>
                    <strong>MEMBERS:</strong> HANSONG ZHU(8th) & JUSTIN SUN(8th)
                  </div>
                  <div style={detailStyle}>
                    <strong>PROJECT TYPE:</strong> WEBSITE
                  </div>
                  <Credits />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
