import React from 'react';
import "./App.css";
import { Carousel } from "./common/Carousel";
import { ItemEF } from "./common/ItemEF";
import { Navbar, nav } from "./common/Nav";

const Effects = () => {
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

  const gradientStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `
      radial-gradient(circle at 20% 20%, rgba(255, 182, 193, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(173, 216, 230, 0.15) 0%, transparent 50%)
    `,
    filter: 'blur(40px)',
    zIndex: -5,
    pointerEvents: 'none'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    minHeight: '100vh',
    background: 'transparent'
  };

  const carouselWrapperStyle = {
    position: 'relative',
    height: '100vh'
  };

  return (
    <>
      <div style={bgStyle} />
      <div style={gradientStyle} />
      <div style={contentStyle}>
        <Navbar pages={nav} />
        <div style={carouselWrapperStyle}>
          <Carousel>
            <ItemEF image="/assets/blaskic.webp">
              <h1>Humanitarian Protection</h1>
              The Geneva Conventions of 1949 marked a pivotal moment in international humanitarian law, 
              establishing fundamental protections for civilians and prisoners of war. These conventions 
              emerged from the devastating experiences of World War II, where the absence of comprehensive 
              protections led to unprecedented human suffering. The agreements specifically outlined the 
              rights of wounded soldiers, prisoners of war, and civilians in occupied territories, 
              setting a new standard for humanitarian treatment during armed conflicts.
            </ItemEF>
            <ItemEF image="/assets/geneva.jpg">
              <h1>Legal Framework</h1>
              The Conventions created a robust legal framework that continues to influence modern 
              international law. They established clear guidelines for the treatment of non-combatants, 
              medical personnel, and aid workers. The principles laid out in these documents have been 
              instrumental in prosecuting war crimes and have served as the foundation for subsequent 
              humanitarian laws. The International Committee of the Red Cross (ICRC) plays a crucial 
              role in monitoring compliance and promoting understanding of these vital protections.
            </ItemEF>
            <ItemEF image="/assets/solferino.jpg">
              <h1>Lasting Impact</h1>
              The effects of the Geneva Conventions extend far beyond their original scope. They have 
              influenced military training worldwide, shaped diplomatic relations, and established 
              universal standards for human rights during conflicts. Modern peacekeeping operations, 
              humanitarian missions, and international tribunals all draw their authority and guidance 
              from these foundational documents. Their legacy continues to evolve as they address new 
              challenges in contemporary warfare and humanitarian crises.
            </ItemEF>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Effects;