import React from "react";
import { Navbar, nav } from "./common/Nav";
import { Title, Subtitle } from "./common/Title";
import { Cite } from "./common/Cite";
import { ScrollToTop } from "./common/ScrollToTop";
import citations from "../data/bibliography.json";
import Credits from "./common/Credits";
import { Section } from "./common/Section";

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

const mainStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem",
};

const sectionHeaderStyle = {
  color: "#fff",
  fontSize: "1.25rem",
  fontWeight: 600,
  marginTop: "2rem",
  marginBottom: "1rem",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  paddingBottom: "0.5rem",
};

export default function Bib() {
  // Group citations by type
  const citationsByType = citations.reduce((acc, citation) => {
    if (!acc[citation.type]) {
      acc[citation.type] = [];
    }
    acc[citation.type].push(citation);
    return acc;
  }, {});

  return (
    <ScrollToTop>
      <div style={bgStyle} />
      <div style={appStyle} className="app-container">
        <div style={contentStyle}>
          <Navbar pages={nav} />
          <Title>Paperwork</Title>
          <Section hasImage={false} header="Process Paper">
            <h1>
              How did you choose your topic and how does it relate to the annual
              theme?
            </h1>
            <p>
              We first were planning to discuss the Declaration of Geneva
              (completely unrelated to the Geneva Conventions), a medical ethics
              guideline that stated the responsibilities of a doctor. We could
              not, however, find any rights directly linked to it, so we decided
              to switch to the Geneva Conventions. The Geneva Conventions is
              related to the annual theme &quot;Rights and
              Responsibilities&quot; because the Geneva Conventions are a set of
              documents that list the rights and responsibilities of medical
              personnel, civilians, and belligerents in war.
            </p>
            <h1>How did you conduct your research?</h1>
            <p>
              We first gathered sources about each of the conventions, the
              additional protocols, and a few court cases. After that, we found
              all of our images. Finally, we found our counter argument source.
              We researched by just googling.
            </p>
            <h1>How did you create your project?</h1>
            <p>
              This was my first <em>&quot;large&quot;</em> React Project(I
              mostly just used pure HTML before), so this was as much of a
              learning experience for me as for the viewers.
            </p>
            <p>
              <code>yarn create react-app</code> + <code>react-router</code>{" "}
              make for a pretty good static site, especially when paired with
              typescript and yarn.
            </p>
            <h2>Why React?</h2>
            <p>
              When writing modular, content-oriented websites(like a NHD
              website) it's really convenient to have components that can
              support all sorts of content. This incudes images, text and video.
            </p>
            ``
            <h2>Why don't you just use the website builder?</h2>
            <p>
              There are just too many limitations, and to really make a website
              that <em>pops</em> I think making the site from scratch is worth
              the effort. I also took this as a learning opportunity.
            </p>
            <ol style={{ marginLeft: "1.5rem" }}>
              <li>
                I originally started the site as just another static site, but
                after considering for a bit, I decided that it was not very
                practical to copy-and-paste <code>&lt;div&gt;</code> tags for 10
                hours so I converted it to a react site.
                <ol
                  style={{
                    marginTop: "0.5rem",
                    marginLeft: "1.5rem",
                    listStyleType: "lower-alpha",
                  }}
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    To convert the website, I first used{" "}
                    <code>yarn init react-app</code> to generate the template.
                  </li>
                  <li>
                    I first copy-and-pasted each component into its own file,
                    then I moved all the styles to their respective components.
                  </li>
                </ol>
              </li>
              <li style={{ marginTop: "1rem" }}>
                After receiving feedback that the site is not very visually
                appealing, I reworked it to look more professional.
              </li>
              <li style={{ marginTop: "1rem" }}>
                I moved the content into the site via manual copy-pasting.
              </li>
            </ol>
            <p>
              The site can be found on github at
              https://github.com/potatolover68/nhd-2024
            </p>
            <h1>In what ways is your topic significant in history?</h1>
            <p>
              The First Geneva Convention revolutionized wartime medical care
              and was the first widespread humanitarian agreement. The
              conventions were a major part of the international humanitarian
              response to atrocities such as the Holocaust and devastating wars
              such as World War 1, which caused the 1929 Geneva Convention. The
              First Geneva Convention set the groundwork for international
              humanitarian law. It also provided a framework for the development
              of medical services in warzones. The conventions created rules
              battling brutalism in war and created a standard for the
              protection of civilians.
            </p>
          </Section>
          <Subtitle>Bibliography</Subtitle>
          <div className="center">
            <div style={mainStyle}>
              {Object.entries(citationsByType).map(
                ([type, typeCitations], index) => (
                  <div key={type}>
                    <h2
                      style={{
                        ...sectionHeaderStyle,
                        marginTop: index === 0 ? "0.75rem" : "2rem",
                      }}
                    >
                      {type}
                    </h2>
                    {typeCitations.map((citation, index) => (
                      <Cite
                        key={index}
                        title={citation.title}
                        year={citation.year}
                        source={citation.source}
                        url={citation.url}
                      >
                        {citation.annotation}
                      </Cite>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
          <Credits />
        </div>
      </div>
    </ScrollToTop>
  );
}
