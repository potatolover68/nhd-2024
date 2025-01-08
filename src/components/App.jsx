import "./App.css";
import { Hero } from "./common/Hero";
import { Section } from "./common/Section";
import { Quote } from "./common/Quote";
import { Navbar, nav } from "./common/Nav";
import { ScrollReveal, FadeIn } from "./common/ScrollAnimation";
import { Title } from "./common/Title";
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
                <Section>
                  <center>
                    2025 NHD
                    <br />
                    TOPIC: THE FIRST GENEVA CONVENTION
                  </center>
                </Section>
              </FadeIn>
            </div>
          </div>
          <Credits />
        </div>
      </div>
    </>
  );
};

export default App;
