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

const Background = () => {
  return (
    <>
      <div style={bgStyle} />
      <div style={appStyle} className="app-container">
        <div style={contentStyle}>
          <Navbar pages={nav} />
          <div className="center">
            <div className="main">
              <SpacingBlock height="6rem" />
              <Title subtitle="The story of how one man's experience at the Battle of Solferino led to the creation of the Geneva Convention and the International Red Cross.">
                Background
              </Title>

              <ScrollReveal delay={300}>
                <SectionLarge header="The Battle of Solferino" image="/assets/solferino-battle.jpg">
                  <InlineQuote author="History.com Editors">
                    In 1859, Genevan businessman Henry Dunant traveled to
                    Emperor Napoleon III's headquarters in northern Italy to
                    seek land rights for a business venture.
                  </InlineQuote>
                  <p>
                    On his journey, he witnessed the battlefield of the Battle of
                    Solferino where nearly 40,000 perished. Even though by the
                    time he arrived the fight had concluded, he was still
                    horrified by the suffering.
                  </p>
                </SectionLarge>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Section header="Henry Dunant's Response" image="/assets/dunant.webp">
                  <InlineQuote author="History.com Editors">
                    The horrific suffering Dunant saw impacted him so greatly
                    he wrote a first-hand account in 1862 called 'A Memory of
                    Solferino'. But he didn't just write about what he'd
                    observed, he also proposed a solution: All nations come
                    together to create trained, volunteer relief groups to treat
                    battlefield wounded and offer humanitarian assistance to
                    those affected by war.
                  </InlineQuote>
                  <p>
                    He also helped by organizing medical aid for the wounded and
                    forming the International Committee for the Relief of the
                    Wounded, now known as the Red Cross, in 1863. All of these
                    actions inspired 16 countries to send delegates and military
                    medical units to Geneva for negotiations about a treaty to
                    reduce wartime suffering.
                  </p>
                </Section>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <SectionLarge header="The First Geneva Convention" image="/assets/convention.jpg" hasBackground={false}>
                  <InlineQuote author="International Committee of the Red Cross">
                    The conference lasted from 8-22 August 1864.
                  </InlineQuote>
                  <p>
                    This meeting and the treaty signed by 12 nations at the end
                    were known as the First Geneva Convention.
                  </p>
                  <InlineQuote author="Malcolm Shaw, for Encyclopædia Britannica">
                    This convention provided for (1) the immunity from capture
                    and destruction of all establishments for the treatment of
                    wounded and sick soldiers and their personnel, (2) the
                    impartial reception and treatment of all combatants, (3) the
                    protection of civilians providing aid to the wounded, and
                    (4) the recognition of the Red Cross symbol as a means of
                    identifying persons and equipment covered by the agreement.
                  </InlineQuote>
                </SectionLarge>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Section header="Dunant's Legacy" image="/assets/rc-symbols.jpg">
                  <p>
                    Despite his contributions, Henry Dunant spent most of the rest
                    of his life in poverty as he neglected his business affairs.
                    He continued to raise awareness about humanitarian issues.
                    His work led to the establishment of the Red Cross and laid
                    the foundation for modern humanitarian law.
                  </p>
                </Section>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
