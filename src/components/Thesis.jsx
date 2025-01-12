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
                  <Title>2024 NHD: Rights, and Responsibilities</Title>
                  <SectionLarge
                    header="Thesis"
                    image="/assets\Henry_Dunant-young.jpg"
                  >
                    In 1859, Genevan businessman Henry Dunant witnessed the
                    Battle of Solferino on a trip to secure water and land
                    rights in Algeria. Horrified by the violation of principles
                    he viewed as unalienable, notably the rights and duties of
                    belligerents to receive and provide medical assistance on
                    the battlefield, he responded by writing A Memory of
                    Solferino (1862) to record his experience and propose
                    solutions. Despite his effort to intervene, the rights of
                    prisoners and injured soldiers was not a given historically
                    and often considered by European nations to be suspended
                    during periods of armed conflict. In other words, rights of
                    soldiers were entirely dependent on the country to provide
                    these standards and often could be abandoned in the name of
                    military or political necessity, as Dunant saw through the
                    example of 40,000 casualties. In this context, how did
                    Dunant create new bodies that could finally hold
                    governments, military officers, and relief organizations
                    responsible? After organizing aid and forming the Red Cross
                    (1863), Dunant’s writings and the public outrage that ensued
                    inspired representatives to convene and discuss methods to
                    decrease suffering in areas of conflict. This assembly,
                    known as the First Geneva Convention (1864), led to the
                    creation of the earliest version of the Geneva Convention,
                    an agreement signed by 12 nations that established an
                    international humanitarian law for the first time. In the
                    context of a new and decentralized understanding of
                    humanitarian ethics, brought to the fore by public opinion,
                    the effort to grant countries the responsibility to uphold
                    de juris rights could finally succeed. The document not only
                    started protecting wartime individuals immediately upon
                    going into effect, but also provided a basis for further
                    changes and protections to prevent future atrocities.
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
