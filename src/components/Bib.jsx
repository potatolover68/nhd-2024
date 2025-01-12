import React from 'react';
import { Navbar, nav } from "./common/Nav";
import { Title } from "./common/Title";
import { Cite } from "./common/Cite";
import { ScrollToTop } from "./common/ScrollToTop";
import citations from '../data/bibliography.json';
import Credits from "./common/Credits";

const bgStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: '#000',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23171717'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
  zIndex: -2,
};

const appStyle = {
  position: 'relative',
  minHeight: '100vh',
  color: '#fff',
  zIndex: 1
};

const contentStyle = {
  position: 'relative',
  zIndex: 2,
  minHeight: '100vh'
};

const mainStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem',
};

const sectionHeaderStyle = {
  color: '#fff',
  fontSize: '1.25rem',
  fontWeight: 600,
  marginTop: '2rem',
  marginBottom: '1rem',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  paddingBottom: '0.5rem',
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
      <>
        <div style={bgStyle} />
        <div style={appStyle} className="app-container">
          <div style={contentStyle}>
            <Navbar pages={nav} />
            <Title>Bibliography</Title>
            <div className="center">
              <div style={mainStyle}>
                {Object.entries(citationsByType).map(([type, typeCitations], index) => (
                  <div key={type}>
                    <h2 style={{
                      ...sectionHeaderStyle,
                      marginTop: index === 0 ? '0.75rem' : '2rem'
                    }}>{type}</h2>
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
                ))}
              </div>
            </div>
            <Credits />
          </div>
        </div>
      </>
    </ScrollToTop>
  );
}
