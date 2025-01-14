import React from "react";
import "./App.css";
import { Hero } from "./common/Hero";
import { Section, SectionLarge, SectionNoImage } from "./common/Section";
import { Quote, InlineQuote } from "./common/Quote";
import { Carousel } from "./common/Carousel";
import { Navbar, nav } from "./common/Nav";
import { ScrollReveal, FadeIn } from "./common/ScrollAnimation";
import { Title } from "./common/Title";
import { SpacingBlock } from "./common/SpacingBlock";
import Credits from "./common/Credits";
import { ScrollToTop } from "./common/ScrollToTop";

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

const Thesis = () => {
  return (
    <ScrollToTop>
      <>
        <div style={bgStyle} />
        <div style={appStyle} className="app-container">
          <div style={contentStyle}>
            <Navbar pages={nav} />
            <div className="center">
              <div className="main">
                <SpacingBlock height="6rem" />
                <Title>Thesis</Title>
                <ScrollReveal>
                  <Title>2025 NHD: Rights, and Responsibilities</Title>
                  <SectionLarge
                    header="Thesis"
                    image="/assets\Henry_Dunant-young.jpg"
                  >
                    Before 1864, European nations did not formally acknowledge
                    the rights and duties of belligerents, citing military or
                    political necessity. The writings of Genevan business Henry
                    Dunant, eyewitness to the bloody Battle of Solferino,
                    inspired representatives to form the First Geneva Convention
                    and to establish international humanitarian law for the
                    first time. With Dunant's new humanitarian ethics, counties
                    had the responsibility to uphold new rights granted to war
                    participants. The agreement began protecting individuals in
                    warzones immediately upon going into effect, provided a
                    basis for future preventions of atrocities through new
                    conventions, and allowed prosecutors to sue violators,
                    creating cases long after its creation.
                  </SectionLarge>
                </ScrollReveal>
              </div>
            </div>
            <Credits />
          </div>
        </div>
      </>
    </ScrollToTop>
  );
};

export default Thesis;
