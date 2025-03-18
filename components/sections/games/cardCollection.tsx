import clsx from "clsx";
import Image from "next/image";

import { CARD_COLLECTION } from "./constant";

export default function CardCollection() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 lg:gap-x-8 mt-10">
      {CARD_COLLECTION.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={clsx({
            "flex flex-col space-y-4": true,
            "mt-10": rowIndex % 2 !== 0,
          })}
        >
          {row.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className="relative w-fit h-fit shadow-xl rounded-2xl overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.title}
                className="w-60 md:w-80 lg:w-[400px] object-cover"
                priority
              />
              <div className="absolute inset-0 flex flex-col justify-end p-2 text-white">
                <h2 className="text-2xl font-bold">{card.title}</h2>
                <p className="text-xs mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
