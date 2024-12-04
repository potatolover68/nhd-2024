import React from 'react';
import "./App.css";
import { Hero } from "./common/Hero";
import { Section, SectionLarge, SectionNoImage } from "./common/Section";
import { Quote, InlineQuote } from "./common/Quote";
import { Carousel } from "./common/Carousel";
import { Navbar, nav } from "./common/Nav";
import { ScrollReveal, FadeIn } from "./common/ScrollAnimation";
import { Title } from "./common/Title";

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

const TTC = () => {
  return (
    <>
      <div style={bgStyle} />
      <div style={appStyle} className="app-container">
        <div style={contentStyle}>
          <Navbar pages={nav} />
          <Title image="/assets/geneva.jpg">
            Theme Topic Connections to the Geneva Conventions
          </Title>
          <div className="center">
            <div className="main">
              <ScrollReveal delay={300}>
                <Section header="The worst nhd website ever" image="/assets/dunant.webp" hasBackground={true} imagePosition="right">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
                  optio consectetur dolorem quas quo delectus itaque iste accusamus
                  quod aliquam repellendus? Quas harum consequuntur natus numquam
                  excepturi nostrum id suscipit veritatis enim quaerat ullam minima
                  incidunt culpa ab temporibus, vel sequi eveniet fugit! Magnam, esse.
                  Sunt eveniet dolores suscipit sit officia, impedit quis, esse dolor
                  dolorem quam molestias provident laborum perspiciatis a numquam
                  inventore velit nam enim quia tempore debitis voluptatem.
                  <InlineQuote author="michaelsoft binbows tech sapport">
                    hello your compooter haVF virues
                  </InlineQuote></Section>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Section header="nhd bro" image="/assets/dunant.webp" hasBackground={false} imagePosition="left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
                  optio consectetur dolorem quas quo delectus itaque iste accusamus
                  quod aliquam repellendus? Quas harum consequuntur natus numquam
                  excepturi nostrum id suscipit veritatis enim quaerat ullam minima
                  incidunt culpa ab temporibus, vel sequi eveniet fugit! Magnam, esse.
                  Sunt eveniet dolores suscipit sit officia, impedit quis, esse dolor
                  dolorem quam molestias provident laborum perspiciatis a numquam
                  inventore velit nam enim quia tempore debitis voluptatem.
                  <InlineQuote author="michaelsoft binbows tech sapport">
                    hello your compooter haVF virues
                  </InlineQuote>
                  Ab voluptatem delectus molestias! Magni, dolores ad molestiae corrupti
                  impedit doloribus iusto, similique vero optio consectetur error!
                  Fugiat dicta aspernatur illum asperiores quas itaque voluptatibus
                  dolores natus, quisquam inventore, a incidunt exercitationem ad
                  architecto veniam. Hic dolorem aut earum repellendus laborum maiores
                  repudiandae nemo, vero facilis! Nemo velit quisquam, mollitia,
                  maiores ab rem distinctio ullam culpa, repellendus amet rerum cumque
                  illo dicta laboriosam dolorem esse saepe.
                </Section>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <SectionNoImage header="Historical Context">
                  The Geneva Conventions emerged from a pressing need to establish humanitarian standards in warfare. Prior to their creation, there were few formal international laws governing the treatment of civilians, prisoners of war, or wounded soldiers during armed conflicts. This legal vacuum often resulted in unnecessary suffering and countless civilian casualties. The conventions represent a pivotal moment in international humanitarian law, establishing fundamental rules that protect those who are not participating in hostilities and those who can no longer fight.
                </SectionNoImage>
              </ScrollReveal>
              <FadeIn delay={200}>
                <Quote author="-michaelsoft binbows tech sapport">
                  hello your compooter haVF virues
                </Quote>
              </FadeIn>
              <ScrollReveal delay={300}>
                <SectionNoImage header="Historical Context" hasBackground={false}>
                  The Geneva Conventions emerged from a pressing need to establish humanitarian standards in warfare. Prior to their creation, there were few formal international laws governing the treatment of civilians, prisoners of war, or wounded soldiers during armed conflicts. This legal vacuum often resulted in unnecessary suffering and countless civilian casualties. The conventions represent a pivotal moment in international humanitarian law, establishing fundamental rules that protect those who are not participating in hostilities and those who can no longer fight.
                </SectionNoImage>
              </ScrollReveal>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TTC;
