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

const Background = () => {
  return (
    <ScrollToTop>
      <div style={bgStyle} />
      <div style={appStyle} className="app-container">
        <div style={contentStyle}>
          <Navbar pages={nav} />
          <div className="center">
            <div className="main">
              <SpacingBlock height="6rem" />
              <Title subtitle="The story of how wartime humanitarian laws evolved from limited treaties to the first widespread international agreement.">
                Background
              </Title>

              <ScrollReveal delay={300}>
                <SectionLarge
                  header="Early Humanitarian Laws"
                  image="/assets/deguerre2.jpg"
                  hasBackground={false}
                >
                  <p>
                    Before the First Geneva Convention, there were some wartime
                    humanitarian laws, but they were not widely agreed to.
                  </p>
                  <InlineQuote>
                    The Governments of Spain and Colombia wish to express to the
                    world the horror with which they view the war of
                    extermination that has devastated these territories until
                    now, turning them into a theatre of blood; and wishing to
                    take advantage of the first moment of calm that has arisen
                    to regularize the war that exists between both
                    Governments…they have agreed to appoint Commissioners to
                    stipulate and establish a treaty for the regularization of
                    war.
                  </InlineQuote>
                  <p>
                    This is an excerpt from the 1820 treaty for the
                    regularization of war. While these agreements existed, the
                    participating parties were few, in this case only being 2.
                  </p>
                  <p>
                    The rarity of these regulations meant that many atrocities
                    and much unnecessary suffering took place.
                  </p>
                </SectionLarge>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Section
                  header="The Battle of Solferino"
                  image="/assets/solferino-battle.jpg"
                >
                  <InlineQuote>
                    In 1859, Genevan businessman Henry Dunant traveled to
                    Emperor Napoleon III's headquarters in northern Italy to
                    seek land rights for a business venture.
                  </InlineQuote>
                  <p>
                    On his journey, he witnessed the battlefield of the Battle
                    of Solferino where nearly 40,000 perished. Even though by
                    the time he arrived the fight had concluded, he was still
                    horrified by the suffering.
                  </p>
                </Section>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <SectionLarge
                  header="Henry Dunant's Response"
                  image="/assets/dunant.webp"
                  hasBackground={false}
                >
                  <InlineQuote>
                    The horrific suffering Dunant saw impacted him so greatly he
                    wrote a first-hand account in 1862 called A Memory of
                    Solferino. But he didn't just write about what he'd
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
                </SectionLarge>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Section
                  header="The First Geneva Convention"
                  image="/assets/convention.jpg"
                >
                  <InlineQuote>
                    The conference…lasted from 8-22 August 1864.
                  </InlineQuote>
                  <p>
                    This meeting and the treaty signed by 12 nations at the end
                    were known as the First Geneva Convention.
                  </p>
                  <InlineQuote>
                    This convention provided for (1) the immunity from capture
                    and destruction of all establishments for the treatment of
                    wounded and sick soldiers and their personnel, (2) the
                    impartial reception and treatment of all combatants, (3) the
                    protection of civilians providing aid to the wounded, and
                    (4) the recognition of the Red Cross symbol as a means of
                    identifying persons and equipment covered by the agreement.
                  </InlineQuote>
                  <p>
                    The First Geneva Convention was the earliest widespread
                    humanitarian agreement for warfare.
                  </p>
                </Section>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <SectionLarge
                  header="Dunant's Legacy"
                  image="/assets/gv.JPG"
                  hasBackground={false}
                >
                  <p>
                    Despite his contributions, Henry Dunant spent most of the
                    rest of his life in poverty as he neglected his business
                    affairs. He continued to raise awareness about humanitarian
                    issues.
                  </p>
                </SectionLarge>
              </ScrollReveal>
            </div>
          </div>
          <Credits />
        </div>
      </div>
    </ScrollToTop>
  );
};

export default Background;
