import React from "react";
import Title from "../layouts/Title";
import { cardData, Card } from "./CardData";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Build on Web technologies" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            des={card.des}
            icon={card.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
