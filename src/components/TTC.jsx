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

const TTC = () => {
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
            Theme Topic Connections to the Geneva Conventions
          </Title>
          <div className="center">
            <div className="main">
              <ScrollReveal delay={300}>
                <SectionLarge
                  header="Medical Neutrality, & Rights of Medical Personnel"
                  image="/assets/navy.jpg"
                  hasBackground={false}
                >
                  <InlineQuote author="1st Geneva Convention">
                    Article 1. Ambulances and military hospitals shall be
                    recognized as neutral, and as such, protected and respected
                    by the belligerents as long as they accommodate wounded and
                    sick. Neutrality shall end if the said ambulances or
                    hospitals should be held by a military force.
                  </InlineQuote>
                  <p>
                    This article gives medical units the right to protection and
                    respect while also burdening them with the responsibility of
                    assisting those in bad condition and soldiers with the
                    responsibility of refraining from engaging with aid
                    providers.
                  </p>
                  <InlineQuote author="1st Geneva Convention">
                    Art. 2. Hospital and ambulance personnel, including the
                    quarter-master's staff, the medical, administrative and
                    transport services, and the chaplains, shall have the
                    benefit of the same neutrality when on duty, and while there
                    remain any wounded to be brought in or assisted.
                  </InlineQuote>
                  <p>
                    Article 2 further clarifies the right of protection for
                    medical personnel and the responsibility of combatants to
                    uphold this right.
                  </p>
                </SectionLarge>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Section
                  header="Occupation and Medical Services, & Equipment Rights"
                  image="/assets/de-guerre.jpg"
                >
                  <InlineQuote author="1st Geneva Convention">
                    Art. 3. The persons designated in the preceding Article may,
                    even after enemy occupation, continue to discharge their
                    functions in the hospital or ambulance with which they
                    serve, or may withdraw to rejoin the units to which they
                    belong. When in these circumstances they cease from their
                    functions, such persons shall be delivered to the enemy
                    outposts by the occupying forces.
                  </InlineQuote>
                  <p>
                    This gives medical units the right to choose to either
                    remain and provide aid even after enemy occupation or leave
                    to the country they belong to. However, they have the
                    responsibility to continue performing their job. The enemy
                    has the responsibility of leaving these personnel alone.
                  </p>
                  <InlineQuote author="1st Geneva Convention">
                    Art. 4. The material of military hospitals being subject to
                    the laws of war, the persons attached to such hospitals may
                    take with them, on withdrawing, only the articles which are
                    their own personal property. Ambulances, on the contrary,
                    under similar circumstances, shall retain their equipment.
                  </InlineQuote>
                  <p>
                    Occupiers of military hospitals have the responsibility to
                    allow supplies to remain when withdrawing. On the other
                    hand, ambulances have the right to keep their equipment.
                  </p>
                </Section>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <SectionLarge
                  header="Civilian Protection"
                  image="/assets/wwii-civilians-2.webp"
                  hasBackground={false}
                >
                  <InlineQuote author="1st Geneva Convention">
                    Art. 5. Inhabitants of the country who bring help to the
                    wounded shall be respected and shall remain free. Generals
                    of the belligerent Powers shall make it their duty to notify
                    the inhabitants of the appeal made to their humanity, and of
                    the neutrality which humane conduct will confer. The
                    presence of any wounded combatant receiving shelter and care
                    in a house shall ensure its protection. An inhabitant who
                    has given shelter to the wounded shall be exempted from
                    billeting and from a portion of such war contributions as
                    may be levied.
                  </InlineQuote>
                  <p>
                    People who treat the wounded have the right to protection of
                    themselves and their home and exemption from billeting.
                    Combatants have the responsibility to obey this right.
                  </p>
                </SectionLarge>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <SectionLarge
                  header="Identification Standards"
                  image="/assets/rc-symbols.jpg"
                  hasBackground={false}
                >
                  <InlineQuote author="1st Geneva Convention">
                    Art. 7. A distinctive and uniform flag shall be adopted for
                    hospitals, ambulances and evacuation parties. It should in
                    all circumstances be accompanied by the national flag. An
                    armlet may also be worn by personnel enjoying neutrality but
                    its issue shall be left to the military authorities. Both
                    flag and armlet shall bear a red cross on a white ground.
                  </InlineQuote>
                  <p>
                    This article gives hospitals, ambulances, and evacuation
                    parties the responsibility to use an identification flag, a
                    national one, and the red cross symbol.
                  </p>
                </SectionLarge>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Section
                  header="Convention Implementation"
                  image="/assets/icrc-parliment.jpg"
                >
                  <InlineQuote author="1st Geneva Convention">
                    Art. 8. The implementing of the present Convention shall be
                    arranged by the Commanders-in-Chief of the belligerent
                    armies following the instructions of their respective
                    Governments and in accordance with the general principles
                    set forth in this Convention.
                  </InlineQuote>
                  <p>
                    This text makes Commanders-in-Chief responsible for
                    implementing the articles in a way which obeys it and their
                    government. Both articles 9 and 10 are not related to the
                    theme.
                  </p>
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

export default TTC;
