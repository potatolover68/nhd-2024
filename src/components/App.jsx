import { Hero } from "./common/Hero";
import { Section, SectionLarge } from "./common/Section";
import { Quote } from "./common/Quote";
import { Carousel } from "./common/Carousel";
import { Navbar, nav } from "./layout/Nav";
import { ScrollReveal, FadeIn } from "./common/ScrollAnimation";

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

function App() {
  return (
    <>
      <div style={bgStyle} />
      <div style={appStyle}>
        <div style={contentStyle}>
          <Navbar pages={nav} />
          <Hero image="/assets/geneva.jpg">
            2025 NHD
          </Hero>
          <div className="center">
            <div className="main">
              <ScrollReveal>
                <Section header="nhd bro" image="/assets/dunant.webp">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
                  optio consectetur dolorem quas quo delectus itaque iste accusamus
                  quod aliquam repellendus? Quas harum consequuntur natus numquam
                  excepturi nostrum id suscipit veritatis enim quaerat ullam minima
                  incidunt culpa ab temporibus, vel sequi eveniet fugit! Magnam, esse.
                  Sunt eveniet dolores suscipit sit officia, impedit quis, esse dolor
                  dolorem quam molestias provident laborum perspiciatis a numquam
                  inventore velit nam enim quia tempore debitis voluptatem. Ab
                  voluptatem delectus molestias! Magni, dolores ad molestiae corrupti
                  impedit doloribus iusto, similique vero optio consectetur error!
                  Fugiat dicta aspernatur illum asperiores quas itaque voluptatibus
                  dolores natus, quisquam inventore, a incidunt exercitationem ad
                  architecto veniam. Hic dolorem aut earum repellendus laborum maiores
                  repudiandae nemo, vero facilis! Nemo velit quisquam, mollitia,
                  maiores ab rem distinctio ullam culpa, repellendus amet rerum cumque
                  illo dicta laboriosam dolorem esse saepe.
                </Section>
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
}

export default App;
