import React from "react";
import "./App.css";
import { Carousel } from "./common/Carousel";
import { ItemEF } from "./common/ItemEF";
import { Navbar, nav } from "./common/Nav";
import { InlineQuote } from "./common/Quote";
import { InlineImage } from "./common/InlineImage";
import Credits from "./common/Credits";
import { ScrollToTop } from "./common/ScrollToTop";

const Effects = () => {
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

  const gradientStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `
      radial-gradient(circle at 20% 20%, rgba(255, 182, 193, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(173, 216, 230, 0.15) 0%, transparent 50%)
    `,
    filter: "blur(40px)",
    zIndex: -5,
    pointerEvents: "none",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    minHeight: "100vh",
    background: "transparent",
  };

  const carouselWrapperStyle = {
    position: "relative",
    height: "100vh",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    color: "#fff",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "translateY(0)",
    opacity: 1,
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#f0f0f0",
    marginBottom: "1rem",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "translateY(0)",
    opacity: 1,
  };

  const quoteWrapperStyle = {
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "translateY(0)",
    opacity: 1,
  };

  const subheadingStyle = {
    fontSize: "1.8rem",
    marginBottom: "1.2rem",
    marginTop: "1.5rem",
    color: "#fff",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "translateY(0)",
    opacity: 1,
  };

  return (
    <ScrollToTop>
      <>
        <div style={bgStyle} />
        <div style={gradientStyle} />
        <div style={contentStyle}>
          <Navbar pages={nav} />
          <div style={carouselWrapperStyle}>
            <Carousel>
              <ItemEF image="/assets/un-icrc.jpg">
                <h1 style={headingStyle}>Long-Term Effects</h1>
                <h2 style={subheadingStyle}>
                  (1864) The Original Geneva Convention
                </h2>
                <p style={paragraphStyle}>
                  The First Geneva Convention was not the only one. There were 3
                  other conventions and 3 additional protocols, each of which
                  were based on previous ones and therefore were effects of the
                  earliest one.
                </p>
                <p style={paragraphStyle}>
                  Proposals to revise the Convention of 1864 led to the 1899
                  Hague Peace Conference, which contained a wish for another
                  conference about the revision. This was organized by the Swiss
                  government and took place in 1906. 35 parties attended, and a
                  new document was agreed to.
                </p>
                <div style={quoteWrapperStyle}>
                  <InlineQuote author="1906 Geneva Convention">
                    With 33 articles divided into eight chapters, the Convention
                    of 1906 is more detailed and more precise in its terminology
                    than the Convention of 1864. New provisions were included
                    concerning the burial of the dead and the transmission of
                    information. The voluntary aid societies were for the first
                    time expressly recognized. On the other hand, provisions
                    which had proved to be impracticable were changed. The
                    prerogatives of the inhabitants bringing help to the wounded
                    were reduced to more reasonable proportions, and the duty to
                    repatriate the wounded who are unfit for further service was
                    transformed into a mere recommendation.
                  </InlineQuote>
                </div>
              </ItemEF>
              <ItemEF image="/assets/solferino-battle-2.jpg">
                <h1 style={headingStyle}>Protection of the Wounded</h1>
                <h2 style={subheadingStyle}>(1906) Geneva Convention Update</h2>
                <div style={quoteWrapperStyle}>
                  <InlineQuote author="1906 Geneva Convention - Article 3">
                    Art. 3. After every engagement the belligerent who remains
                    in possession of the field of battle shall take measures to
                    search for the wounded and to protect the wounded and dead
                    from robbery and ill treatment. He will see that a careful
                    examination is made of the bodies of the dead prior to their
                    interment or incineration.
                  </InlineQuote>
                </div>
                <p style={paragraphStyle}>
                  This article is related to the theme as it gives the right of
                  protection to the wounded and dead. It also grants bodies the
                  right to careful examination. Militaries are given the
                  responsibility to uphold these rights and search for those
                  injured.
                </p>
              </ItemEF>
              <ItemEF image="/assets/icrcparliment.webp">
                <h1 style={headingStyle}>Evolution After World War I</h1>
                <h2 style={subheadingStyle}>(1929) Geneva Convention</h2>
                <p style={paragraphStyle}>
                  After World War I, it was clear the 1906 Convention and The
                  Hague Convention of 1907 didn't go far enough. In 1929,
                  updates were made to further the civilized treatment of
                  prisoners of war.
                </p>
                <div style={quoteWrapperStyle}>
                  <InlineQuote author="1929 Geneva Convention">
                    The most important innovations consisted in the prohibition
                    of reprisals and collective penalties, the organization of
                    prisoners' work, the designation, by the prisoners, of
                    representatives and the control exercised by protecting
                    Powers.
                  </InlineQuote>
                  <InlineQuote author="1929 Geneva Convention - Article 2">
                    Art. 2. Prisoners of war are in the power of the hostile
                    Government, but not of the individuals or formation which
                    captured them. They shall at all times be humanely treated
                    and protected, particularly against acts of violence, from
                    insults and from public curiosity. Measures of reprisal
                    against them are forbidden.
                  </InlineQuote>
                  This article gives prisoners of war the right to humane
                  treatment, protection, and avoiding reprisal. Governments are
                  responsible for obeying these rights.
                </div>
              </ItemEF>
              <ItemEF image="/assets/wwii-civilians.webp">
                <h1 style={headingStyle}>Protection of Civilians</h1>
                <h2 style={subheadingStyle}>(1949) Fourth Geneva Convention</h2>
                <InlineQuote author="1949 Fourth Geneva Convention">
                  "The Geneva Conventions which were adopted before 1949 were
                  concerned with combatants only, not with civilians…The events
                  of World War II showed the disastrous consequences of the
                  absence of a convention for the protection of civilians in
                  wartime. The Convention adopted in 1949 takes account of the
                  experiences of World War II."
                </InlineQuote>
                <p style={paragraphStyle}>
                  A major detail about the document was that one of its focuses
                  was on civilian rights and responsibilities.
                </p>
                <InlineQuote author="1949 Fourth Geneva Convention - Article 5">
                  "Article 5…Where in occupied territory an individual protected
                  person is detained as a spy or saboteur…such person shall…be
                  regarded as having forfeited rights of communication under the
                  present Convention."
                </InlineQuote>
                <p style={paragraphStyle}>
                  This article removes rights of communication for spies and
                  saboteurs. This action also removes the responsibility to
                  follow these rights.
                </p>
              </ItemEF>

              <ItemEF image="/assets/conf.jpg">
                <h1 style={headingStyle}>Additional Protocols</h1>
                <h2 style={subheadingStyle}>(1977) Additional Protocol I</h2>
                <InlineQuote author="1977 Additional Protocol I">
                  "In the decades following World War II, the large number of
                  anticolonial and insurrectionary wars threatened to render the
                  Geneva Conventions obsolete. After four years of Red
                  Cross-sponsored negotiations, two additional protocols to the
                  1949 conventions, covering both combatants and civilians, were
                  approved in 1977."
                </InlineQuote>
                <p style={paragraphStyle}>
                  All of the additional protocols were intended to fill in gaps
                  left by the conventions, such as the behavior of soldiers and
                  protection of civilians. This document expanded what was
                  considered an international conflict as most previous
                  conferences only considered these types of wars despite that
                  most fighting at that time was not in this category. It also
                  allowed for the creation of fact-finding committees to
                  investigate possible violations of the conventions.
                </p>
              </ItemEF>

              <ItemEF image="/assets/solferino.jpg">
                <h1 style={headingStyle}>Protection of Wounded and Sick</h1>
                <h2 style={subheadingStyle}>
                  (1977) Additional Protocol I - Article 10
                </h2>
                <InlineQuote author="1977 Additional Protocol I - Article 10">
                  "Article 10…All the wounded, sick and shipwrecked, to
                  whichever Party they belong, shall be respected and
                  protected."
                </InlineQuote>
                <p style={paragraphStyle}>
                  This article gives the wounded, sick, and shipwrecked the
                  right to respect and protection. It burdens military units
                  with the responsibility to uphold these rights.
                </p>
              </ItemEF>

              <ItemEF image="/assets/ihl-conference.webp">
                <h1 style={headingStyle}>Non-International Armed Conflicts</h1>
                <h2 style={subheadingStyle}>(1977) Additional Protocol II</h2>
                <InlineQuote author="1977 Additional Protocol II">
                  "The only provision applicable to non-international armed
                  conflicts before the adoption of the present Protocol was
                  Article 3 common to all four Geneva Conventions of 1949. This
                  Article proved to be inadequate in view of the fact that about
                  80% of the victims of armed conflicts since 1945 have been
                  victims of non-international conflicts and that
                  non-international conflicts are often fought with more cruelty
                  than international conflicts."
                </InlineQuote>
                <p style={paragraphStyle}>
                  The purpose of this protocol was to apply the rules of
                  international wars to internal battles. Important contents
                  include a ban on the order for no survivors and six articles
                  contributing towards the protection of civilians.
                </p>
              </ItemEF>

              <ItemEF image="/assets/icrc_badge.webp">
                <h1 style={headingStyle}>The Red Crystal</h1>
                <h2 style={subheadingStyle}>(2005) Additional Protocol III</h2>
                <InlineQuote author="2005 Additional Protocol III">
                  "Since the nineteenth century the red cross and red crescent
                  emblems have been used as universal symbols of assistance for
                  armed conflict victims…the emblems are sometimes perceived in
                  particular contexts as having a religious or political
                  connotation…As a consequence, the emblems are not given the
                  respect they are due, which diminishes the protection afforded
                  those displaying them."
                </InlineQuote>
                <p style={paragraphStyle}>
                  To solve this, a third protocol was added during a conference
                  which lasted from December 5 to 8 in 2005. It created a new
                  emblem meant to be empty of any connotations. This symbol, the
                  red crystal, was a square tilted on its corner on top of a
                  white background.
                </p>
              </ItemEF>

              <ItemEF image="/assets/rc-symbols-annex.png">
                <h1 style={headingStyle}>Use of Emblems</h1>
                <h2 style={subheadingStyle}>
                  (2005) Additional Protocol III - Article 4
                </h2>
                <InlineQuote author="2005 Additional Protocol III - Article 4">
                  "Article 4…The International Committee of the Red Cross and
                  the International Federation of Red Cross and Red Crescent
                  Societies, and their duly authorized personnel, may use, in
                  exceptional circumstances and to facilitate their work, the
                  distinctive emblem referred to in Article 2 of this Protocol."
                </InlineQuote>
                <p style={paragraphStyle}>
                  This article grants aid workers the right to use the red
                  crystal emblem and responsibility to only utilize it in the
                  correct circumstances.
                </p>
              </ItemEF>

              <ItemEF image="/assets/blaskic.webp">
                <h1 style={headingStyle}>Prosecution of Violations</h1>
                <p style={paragraphStyle}>
                  When the rights and responsibilities of the Geneva Conventions
                  were broken, the violators were prosecuted.
                </p>
                <InlineQuote>
                  "Tihomir Blaškić…stood trial for allegedly having individually
                  planned, instigated, ordered or otherwise aided and abetted in
                  the planning, preparation or execution of the use of Bosnian
                  Muslims as human shields and for the mistreatment of Bosnian
                  Muslims in HVO detention facilities…The prosecution accused
                  Blaškić…of grave breaches of the Geneva Conventions for
                  willful killing, willfully causing great suffering or serious
                  injury to the body or health, extensive destruction of
                  property, inhuman treatment, and taking civilians as
                  hostages…"
                </InlineQuote>
                <p style={paragraphStyle}>
                  He was convicted of all these crimes and sentenced to 45
                  years, but the Appeals Chamber removed many convictions, not
                  including the breakage of the Geneva Conventions through
                  inhuman treatment. The punishment decreased to 9 years.
                </p>
              </ItemEF>

              <ItemEF image="/assets/swiss.jpg">
                <h1 style={headingStyle}>Rwanda Genocide Case</h1>
                <InlineQuote>
                  "The defendant [Fulgence Niyonteze] was the burgomaster of a
                  municipality in Rwanda in 1994. He was charged…with exhorting
                  the population to kill Tutsies and moderate Hutus and with
                  inciting refugees to go back to their homes, with the
                  intention of having them killed and taking their property…He
                  was sentenced to life imprisonment."
                </InlineQuote>
                <p style={paragraphStyle}>
                  An appeal court reduced the sentence to 14 years and found the
                  accused guilty of violating article 3 of the 1949 Geneva
                  Convention and article 4 of Additional Protocol II.
                </p>
              </ItemEF>
              <ItemEF image="/assets/icrc-nurse.jpeg">
                <h1 style={headingStyle}>Short-Term Effects</h1>
                <p style={paragraphStyle}>
                  The Geneva Conventions protected future wartime individuals
                  through creating rights and distributing responsibilities.
                </p>
                <h2 style={subheadingStyle}>
                  Protection for Medical Units and Sanitary Formations
                </h2>
                <InlineQuote author="1864 Geneva Convention - Article 1">
                  Article 1. Ambulances and military hospitals shall be
                  recognized as neutral, and as such, protected and respected by
                  the belligerents as long as they accommodate wounded and sick.
                </InlineQuote>
                <p style={paragraphStyle}>
                  This article protects medical units and forces them to
                  accommodate and protect the injured.
                </p>
                <InlineQuote author="1864 Geneva Convention - Article 6">
                  Art. 6. Mobile sanitary formations (i.e., those which are
                  intended to accompany armies in the field) and the fixed
                  establishments belonging to the sanitary service shall be
                  protected and respected by belligerents.
                </InlineQuote>
                <p style={paragraphStyle}>
                  This protects sanitary organizations, which protect civilians
                  and soldiers.
                </p>
              </ItemEF>
              <ItemEF image="/assets/usaf-pow.webp">
                <h1 style={headingStyle}>Short-Term Effects</h1>
                <p style={paragraphStyle}>
                  The Geneva Conventions protected future wartime individuals
                  through creating rights and distributing responsibilities.
                </p>
                <h2 style={subheadingStyle}>
                  Protection for Prisoners of War and those Not in Combat
                </h2>
                <InlineQuote author="1929 Geneva Convention - Article 4">
                  Art. 4. The detaining Power is required to provide for the
                  maintenance of prisoners of war in its charge.
                </InlineQuote>
                <p style={paragraphStyle}>
                  This article protects prisoners of war.
                </p>
                <InlineQuote author="1949 Geneva Convention - Article 3">
                  Article 3…Persons taking no active part in the hostilities…
                  shall in all circumstances be treated humanely…
                </InlineQuote>
                <p style={paragraphStyle}>
                  Protection is given to those not in combat.
                </p>
                <InlineQuote author="1949 Geneva Convention - Article 17">
                  Article 17…The civilian population shall respect the wounded,
                  sick and shipwrecked, even if they belong to the adverse
                  Party, and shall commit no act of violence against them.
                </InlineQuote>
                <p style={paragraphStyle}>
                  This article shields the wounded from civilian attacks.
                </p>
              </ItemEF>
              <ItemEF image="/assets/nanjing.webp">
                <h1 style={headingStyle}>Short-Term Effects</h1>
                <h2 style={subheadingStyle}>
                  Protection for Civilian Population
                </h2>
                <InlineQuote author="1949 Geneva Convention - Article 13">
                  Article 13…The civilian population as such, as well as
                  individual civilians, shall not be the object of
                  attack…Civilians shall enjoy the protection afforded by this
                  Part, unless and for such time as they take a direct part in
                  hostilities.
                </InlineQuote>
                <p style={paragraphStyle}>
                  Article 13 protects civilians while also ensuring belligerents
                  are not injured by the civilian population.
                </p>
                <InlineQuote author="2005 Additional Protocol III - Article 2">
                  Article 2…This Protocol recognizes an additional distinctive
                  emblem in addition to, and for the same purposes as, the
                  distinctive emblems of the Geneva Conventions. The distinctive
                  emblems shall enjoy equal status.
                </InlineQuote>
                <p style={paragraphStyle}>
                  This text protects users of emblems such as medical personnel
                  by creating a new one without connotations decreasing
                  effectiveness.
                </p>
              </ItemEF>
            </Carousel>
          </div>
          <Credits />
        </div>
      </>
    </ScrollToTop>
  );
};

export default Effects;
