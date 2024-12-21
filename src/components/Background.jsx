import React from "react";
import "./App.css";
import { Hero } from "./common/Hero";
import { Section, SectionLarge, SectionNoImage } from "./common/Section";
import { Quote, InlineQuote } from "./common/Quote";
import { Carousel } from "./common/Carousel";
import { Navbar, nav } from "./common/Nav";
import { ScrollReveal, FadeIn } from "./common/ScrollAnimation";
import { Title } from "./common/Title";

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
              <ScrollReveal delay={300}>
                <Section header="Background" hasImage={false}>
                  <InlineQuote>
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
                  <InlineQuote>
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
                  <InlineQuote>
                    The conference lasted from 8-22 August 1864.
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
                    Despite his contributions, Henry Dunant spent most of the rest
                    of his life in poverty as he neglected his business affairs.
                    He continued to raise awareness about humanitarian issues.
                  </p>
                </Section>

                <Section header="Theme-Topic Connection">
                  <p>
                    The First Geneva Convention created rights and gave
                    responsibilities for the purpose of decreasing suffering
                    during conflicts.
                  </p>
                  <InlineQuote>
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
                    responsibility of refraining from engaging with aid providers.
                  </p>
                  <InlineQuote>
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
                  <InlineQuote>
                    Art. 3. The persons designated in the preceding Article
                    may, even after enemy occupation, continue to discharge
                    their functions in the hospital or ambulance with which they
                    serve, or may withdraw to rejoin the units to which they
                    belong. When in these circumstances they cease from their
                    functions, such persons shall be delivered to the enemy
                    outposts by the occupying forces.
                  </InlineQuote>
                  <p>
                    This gives medical units the right to choose to either remain
                    and provide aid even after enemy occupation or leave to the
                    country they belong to. However, they have the responsibility
                    to continue performing their job. The enemy has the
                    responsibility of leaving these personnel alone.
                  </p>
                  <InlineQuote>
                    Art. 4. The material of military hospitals being subject to
                    the laws of war, the persons attached to such hospitals may
                    take with them, on withdrawing, only the articles which are
                    their own personal property. Ambulances, on the contrary,
                    under similar circumstances, shall retain their equipment.
                  </InlineQuote>
                  <p>
                    Occupiers of military hospitals have the responsibility to
                    allow supplies to remain when withdrawing. On the other hand,
                    ambulances have the right to keep their equipment.
                  </p>
                  <InlineQuote>
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
                  <InlineQuote>
                    Art. 6. Wounded or sick combatants, to whatever nation they
                    may belong, shall be collected and cared for.
                    Commanders-in-Chief may hand over immediately to the enemy
                    outposts enemy combatants wounded during an engagement, when
                    circumstances allow and subject to the agreement of both
                    parties. Those who, after their recovery, are recognized as
                    being unfit for further service, shall be repatriated. The
                    others may likewise be sent back, on condition that they
                    shall not again, for the duration of hostilities, take up
                    arms. Evacuation parties, and the personnel conducting them,
                    shall be considered as being absolutely neutral.
                  </InlineQuote>
                  <p>
                    All injured soldiers have the right to care. If after
                    treatment, one cannot continue fighting, they have the right
                    to be sent back to their country. Evacuation organizers and
                    those evacuating have the right to protection. Those who
                    participate in war have the responsibility of obeying these
                    rights.
                  </p>
                  <InlineQuote>
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
                  <InlineQuote>
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

              <ScrollReveal delay={300}>
                <SectionNoImage header="Historical Context">
                  <p>
                    The Geneva Conventions emerged from a pressing need to
                    establish humanitarian standards in warfare. Prior to their
                    creation, there were few formal international laws governing
                    the treatment of civilians, prisoners of war, or wounded
                    soldiers during armed conflicts. This legal vacuum often
                    resulted in unnecessary suffering and countless civilian
                    casualties. The conventions represent a pivotal moment in
                    international humanitarian law, establishing fundamental rules
                    that protect those who are not participating in hostilities
                    and those who can no longer fight.
                  </p>
                </SectionNoImage>
              </ScrollReveal>

              <FadeIn delay={200}>
                <Quote author="-michaelsoft binbows tech sapport">
                  hello your compooter haVF virues
                </Quote>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
