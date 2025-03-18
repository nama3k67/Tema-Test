import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

import WitchHero from "@/shared/images/witch_hero.png";
import Image from "next/image";

export default function Subscription() {
  const t = useTranslations("hero");

  return (
    <div className="mt-8 md:mt-12 max-w-[560px] overflow-hidden">
      <p className="text-white text-center text-xs md:text-lg shadow-lg backdrop-blur-xs backdrop-brightness-90 lg:backdrop-blur-none xl:backdrop-blur-xs rounded-2xl">
        {t("subscription_title")}
      </p>
      <div className="flex justify-center mt-4">
        <div className="w-full relative">
          <input
            type="email"
            placeholder={t("subscription_placeholder")}
            className="px-4 py-2 rounded-md bg-white w-full h-14"
          />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 absolute right-4 top-0 h-full"
            asChild
          >
            <ArrowRight className="w-7 h-7" />
          </Button>
        </div>
      </div>
      <Image
        src={WitchHero}
        alt="Witch Hero"
        width={500}
        height={500}
        className="lg:hidden translate-x-16 -translate-y-20 md:translate-x-28 md:-translate-y-28"
      />
    </div>
  );
}
