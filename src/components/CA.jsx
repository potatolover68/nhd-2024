import React from "react";
import "./App.css";
import { Hero } from "./common/Hero";
import { Section, SectionLarge, SectionNoImage } from "./common/Section";
import { Quote, InlineQuote } from "./common/Quote";
import { Carousel } from "./common/Carousel";
import { Navbar, nav } from "./common/Nav";
import { ScrollReveal, FadeIn } from "./common/ScrollAnimation";
import { Title } from "./common/Title";
import { InlineImage } from "./common/InlineImage";
import { ScrollToTop } from "./common/ScrollToTop";
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

const CA = () => {
  return (
    <ScrollToTop>
      <div style={bgStyle} />
      <div style={appStyle} className="app-container">
        <div style={contentStyle}>
          <Navbar pages={nav} />
          <Title
            subtitle="The First Geneva Convention created rights and gave
                  responsibilities for the purpose of decreasing suffering
                  during conflicts."
          >
            Counter Argument
          </Title>
          <div className="center">
            <div className="main">
              <ScrollReveal delay={300}>
                <Section
                  header={"Counter-Argument"}
                  image="/assets/gestapo.webp"
                >
                  <InlineQuote
                    author={"Bussman and Schneider, Washington Post"}
                  >
                    ...as each nation's signing of the Geneva Convention fades
                    further into history, we can expect its number of civilian
                    killings to increase.
                  </InlineQuote>{" "}
                  <InlineQuote
                    author={"Bussman and Schneider, Washington Post"}
                  >
                    ...we find that international rules especially fail to reach
                    rebel forces and that the use of force among rebel groups
                    also increases with the years since the ratification of the
                    two treaties.
                  </InlineQuote>{" "}
                  <InlineQuote
                    author={"Bussman and Schneider, Washington Post"}
                  >
                    ...when we compared civil war countries in which the ICRC
                    had established a delegation with countries in which the
                    ICRC was not permanently present neither the on-site, we
                    found that neither having them on site nor their seminars on
                    international humanitarian law reduced attacks on civilians.
                  </InlineQuote>{" "}
                  <InlineQuote
                    author={"Bussman and Schneider, Washington Post"}
                  >
                    The ICRC reacts to international humanitarian law abuses.
                    But its public condemnations do not reduce the carnage in
                    the weeks that follow.
                  </InlineQuote>{" "}
                  <InlineQuote
                    author={"Bussman and Schneider, Washington Post"}
                  >
                    But our findings do not necessarily suggest that the world
                    should entirely abandon the Laws of War and related
                    international norms. Rather, such agreements may need better
                    sanctioning mechanisms. The individual risk of being a
                    victim of political violence more generally has decreased
                    significantly in recent decades…More proactive ICRC
                    policymaking and an International Humanitarian Law with
                    teeth could reduce civilian suffering.
                  </InlineQuote>
                </Section>
              </ScrollReveal>
            </div>
          </div>
          <Credits />
        </div>
      </div>
    </ScrollToTop>
  );
};

export default CA;
