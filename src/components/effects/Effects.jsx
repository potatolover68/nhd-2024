import "../App.css";
import { Carousel } from "../common/Carousel";
import { ItemEF } from "../common/ItemEF";
import { Navbar, nav } from "../layout/Nav";

export default function Effects() {
  const containerStyle = {
    height: "100vh",
    position: "relative",
    isolation: "isolate",
  };

  const gradientStyle = {
    content: "",
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(circle at 70% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 30% 70%, rgba(147, 112, 219, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 20% 20%, rgba(255, 182, 193, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(173, 216, 230, 0.1) 0%, transparent 40%)
    `,
    filter: "blur(40px)",
    zIndex: -1,
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={gradientStyle} />
        <Navbar pages={nav} />
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
    </>
  );
}