import { useTranslations } from "next-intl";
import React from "react";

import CardCollection from "./cardCollection";
import { ROUTES } from "@/shared/constants";

export default function Games() {
  const t = useTranslations("games");

  return (
    <section id={ROUTES.GAMES} className="pt-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-[40px] sm:text-6xl text-center lg:text-[80px] font-bold mb-4 font-display w-full">
          {t("title")}
        </h1>
        <p className="text-sm text-center">{t("description")}</p>

        <CardCollection />
      </div>
    </section>
  );
}
