import { Children, React, useState } from "react";
import "./App.css";
export function Navbar(props) {
  return (
    <>
      <div class="menu">
        {props.pages.map((page, index) => (
          <a key={index} class="item ul-c" href={page[1]}>
            {page[0]}
          </a>
        ))}
      </div>
    </>
  );
}
export function Hero(props) {
  return (
    <>
      <style>
        {`.bgimg {
                background-image: url(${props.image});
        }`}
      </style>
      <div class="hero bgimg">
        <div class="text">
          <span>{props.children}</span>
        </div>
        <span class="source">{props.source}</span>
        <img src="/assets/layered-waves.svg" alt="" />
      </div>
    </>
  );
}
export function Section(props) {
  return (
    <div class="section">
      <div class="content row">
        <div class="text">
          <div class="header">{props.header}</div>
          {props.children}
        </div>
        <img src={props.image} alt={props.alt} />
      </div>
    </div>
  );
}
export function Quote(props) {
  return (
    <div class="section gy-1">
      <div class="content">
        <div class="qt-c">
          <div class="qt l">
            <img src="/assets/quotes.svg" alt="" />
          </div>
          <div class="text">{props.children}</div>
          <div class="qt r">
            <img src="/assets/quotes.svg" alt="" />
          </div>
        </div>
        <div class="qt-t">{props.author}</div>
      </div>
    </div>
  );
}
export function SectionLarge(props) {
  return (
    <div class="cols">
      <img src={props.image} alt="" />
      <div class="section">
        <div class="content">
          <div class="text">
            <div class="header">{props.header}</div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
export function Carousel(props) {
  const children = Children.toArray(props.children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        ❮
      </button>
      {children.map((child, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === currentIndex ? "active" : "inactive"
          }`}
          style={{
            display: index === currentIndex ? "block" : "none",
          }}
        >
          {child}
        </div>
      ))}
      <button className="carousel-button next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}
export function ItemEF(props) {
  return (
    <div className="item-con">
      <div
        className="images"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="item-ct">
        <div>{props.children}</div>
      </div>
    </div>
  );
}
