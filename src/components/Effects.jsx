import React from "react";
import "./App.css";
import { Carousel } from "./common/Carousel";
import { ItemEF } from "./common/ItemEF";
import { Navbar, nav } from "./common/Nav";
import { InlineQuote } from "./common/Quote";
import { InlineImage } from "./common/InlineImage";

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

  return (
    <>
      <div style={bgStyle} />
      <div style={gradientStyle} />
      <div style={contentStyle}>
        <Navbar pages={nav} />
        <div style={carouselWrapperStyle}>
          <Carousel>
            <ItemEF image="/assets/convention.jpg">
              <h1 style={headingStyle}>Long-Term Effects</h1>
              <p style={paragraphStyle}>
                The First Geneva Convention was not the only one. There were 3 other conventions 
                and 3 additional protocols, each of which were based on previous ones and therefore 
                were effects of the earliest one.
              </p>
              <p style={paragraphStyle}>
                Proposals to revise the Convention of 1864 led to the 1899 Hague Peace Conference, 
                which contained a wish for another conference about the revision. This was organized 
                by the Swiss government and took place in 1906. 35 parties attended, and a new 
                document was agreed to.
              </p>
              <div style={quoteWrapperStyle}>
                <InlineQuote>
                  With 33 articles divided into eight chapters, the Convention of 1906 is more detailed 
                  and more precise in its terminology than the Convention of 1864. New provisions were 
                  included concerning the burial of the dead and the transmission of information. The 
                  voluntary aid societies were for the first time expressly recognized. On the other hand, 
                  provisions which had proved to be impracticable were changed. The prerogatives of the 
                  inhabitants bringing help to the wounded were reduced to more reasonable proportions, 
                  and the duty to repatriate the wounded who are unfit for further service was 
                  transformed into a mere recommendation.
                </InlineQuote>
              </div>
            </ItemEF>

            <ItemEF image="/assets/solferino-battle.jpg">
              <h1 style={headingStyle}>Protection of the Wounded</h1>
              <div style={quoteWrapperStyle}>
                <InlineQuote>
                  Art. 3. After every engagement the belligerent who remains in possession of the field 
                  of battle shall take measures to search for the wounded and to protect the wounded 
                  and dead from robbery and ill treatment.

                  He will see that a careful examination is made of the bodies of the dead prior to 
                  their interment or incineration.
                </InlineQuote>
              </div>
              <p style={paragraphStyle}>
                This article is related to the theme as it gives the right of protection to the wounded 
                and dead. It also grants bodies the right to careful examination. Militaries are given 
                the responsibility to uphold these rights and search for those injured.
              </p>
            </ItemEF>

            <ItemEF image="/assets/icrc-parliment-6-7-1929.jpg">
              <h1 style={headingStyle}>Evolution After World War I</h1>
              <p style={paragraphStyle}>
                After World War I, it was clear the 1906 Convention and The Hague Convention of 1907 
                didn't go far enough. In 1929, updates were made to further the civilized treatment 
                of prisoners of war.
              </p>
              <div style={quoteWrapperStyle}>
                <InlineQuote>
                  The most important innovations consisted in the prohibition of reprisals and collective 
                  penalties, the organization of prisoners' work, the designation, by the prisoners, of 
                  representatives and the control exercised by protecting Powers.
                </InlineQuote>
                <InlineQuote>
                  Art. 2. Prisoners of war are in the power of the hostile Government, but not of the 
                  individuals or formation which captured them.

                  They shall at all times be humanely treated and protected, particularly against acts 
                  of violence, from insults and from public curiosity.

                  Measures of reprisal against them are forbidden.
                </InlineQuote>
              </div>
            </ItemEF>

            <ItemEF image="/assets/geneva.jpg">
              <h1 style={headingStyle}>Protection of Civilians</h1>
              <div style={quoteWrapperStyle}>
                <InlineQuote>
                  Article 13... The civilian population as such, as well as individual civilians, shall 
                  not be the object of attack. Acts or threats of violence the primary purpose of which 
                  is to spread terror among the civilian population are prohibited... Civilians shall 
                  enjoy the protection afforded by this Part, unless and for such time as they take a 
                  direct part in hostilities.
                </InlineQuote>
              </div>
              <p style={paragraphStyle}>
                Article 13 protects civilians while also ensuring belligerents are not injured by 
                the civilian population.
              </p>
            </ItemEF>

            <ItemEF image="/assets/rc-symbols.jpg">
              <h1 style={headingStyle}>Modern Developments</h1>
              <div style={quoteWrapperStyle}>
                <InlineQuote>
                  Since the nineteenth century the red cross and red crescent emblems have been used 
                  as universal symbols of assistance for armed conflict victims... the emblems are 
                  sometimes perceived in particular contexts as having a religious or political 
                  connotation... As a consequence, the emblems are not given the respect they are 
                  due, which diminishes the protection afforded those displaying them.
                </InlineQuote>
              </div>
              <p style={paragraphStyle}>
                To solve this, a third protocol was added during a conference which lasted from 
                December 5 to 8 in 2005. It created a new emblem meant to be empty of any 
                connotations. This symbol, the red crystal, was a square tilted on its corner 
                on top of a white background.
              </p>
              <div style={quoteWrapperStyle}>
                <InlineQuote>
                  Article 2... This Protocol recognizes an additional distinctive emblem in addition 
                  to, and for the same purposes as, the distinctive emblems of the Geneva Conventions. 
                  The distinctive emblems shall enjoy equal status.
                </InlineQuote>
              </div>
            </ItemEF>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Effects;
