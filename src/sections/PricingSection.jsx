import React from "react";
import Card from "../components/shared/Card";
import TextCenter from "../components/shared/TextCenter";

function PricingSection() {
  const card1 = {
    border: { width: 0, color: "primary" },
    header: { type: false, text: "Most Popular" },
    title: "Starter Edition",
    subtitle: "eBook download only",
    price: `$12.99`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    href: "#",
    btn: "Buy now",
  };
  const card2 = {
    border: { width: 2, color: "primary" },
    header: { type: true, text: "Most Popular" },
    title: "Complete Edition",
    subtitle: "eBook download & all updates",
    price: `$18.99`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Bamet consectetur adipisicing elit`,
    href: "#",
    btn: "Buy now",
  };

  const card3 = {
    border: { width: 0, color: "primary" },
    header: { type: false, text: "Most Popular" },
    title: "Ultimate Edition",
    subtitle: "download, updates & extra",
    price: `$24.99`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    href: "#",
    btn: "Buy now",
  };

  return (
    <section id="pricing" className="bg-light my-5">
      <div className="container-lg">
        <TextCenter
          heading={"Pricing Plans"}
          text={"Choose a pricing plan that suite you."}
        />
        <div className="row g-0 my-5 align-items-center justify-content-center">
          <div className="col-8 col-lg-4 col-xl-3">
            <Card card={card1} />
          </div>
          <div className="col-9 col-lg-4">
            <Card card={card2} />
          </div>
          <div className="col-8 col-lg-4 col-xl-3">
            <Card card={card3} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
