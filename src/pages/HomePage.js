import React from "react";

import Header from "components/Header";

import Section from "elements/Section";
import Clients from "components/Clients";

import Hero from "assets/images/hero-image.png";
import Feature01 from "assets/images/feature-tile-icon-01.svg";
import Feature02 from "assets/images/feature-tile-icon-02.svg";
import Feature03 from "assets/images/feature-tile-icon-03.svg";
import Features from "components/Features";
import Pricing from "components/Pricing";
import Footer from "components/Footer";

export default function HomePage() {
  const features = [
    {
      img: Feature01,
      imgAlt: "Feature tile icon 01",
      title: " Join the system",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      img: Feature02,
      imgAlt: "Feature tile icon 02",
      title: " Join the system",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      img: Feature03,
      imgAlt: "Feature tile icon 03",
      title: " Join the system",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
  ];

  const pricing = [
    {
      price: 27,
      currencySymbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: false,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: false,
          content: "Excepteur sint occaecat velit",
        },
      ],
    },
    {
      price: 47,
      currencySymbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: false,
          content: "Excepteur sint occaecat velit",
        },
      ],
    },
    {
      price: 67,
      currencySymbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isCheck: true,
          content: "Excepteur sint occaecat velit",
        },
      ],
    },
  ];

  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <h1
                  className="mt-0 mb-16 reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  Landing template for startups
                </h1>
                <div className="container-xs">
                  <p
                    className="mt-0 mb-32 reveal-from-bottom"
                    data-reveal-delay="400"
                  >
                    Our landing page template works on all devices, so you only
                    have to set it up once, and get beautiful results forever.
                  </p>
                </div>
              </div>
              <div
                className="hero-figure reveal-from-bottom illustration-element-01"
                data-reveal-value="20px"
                data-reveal-delay="800"
              >
                <img
                  className="has-shadow"
                  src={Hero}
                  alt="Hero"
                  width="896"
                  height="504"
                />
              </div>
            </div>
          </div>
        </Section>
        <Clients />
        <Section className="features-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((feature, index) => (
                  <Features key={index} data={feature} />
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section className="pricing">
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider">
              <div className="section-header center-content">
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">Simple, transarent pricing</h2>
                  <p className="m-0">
                    Lorem ipsum is common placeholder text used to demonstrate
                    the graphic elements of a document or visual presentation.
                  </p>
                </div>
              </div>
              <div className="tiles-wrap">
                {pricing.map((price, index) => (
                  <Pricing key={index} data={price} />
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
