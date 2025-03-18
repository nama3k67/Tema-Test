import { useTranslations } from "next-intl";

import { ROUTES } from "@/shared/constants";
import CountdownTimer from "./countdown";
import Subscription from "./subscription";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id={ROUTES.HOME}
      className="py-4 pb-0 h-fit lg:h-[70vh] 2xl:h-[80vh]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="block text-[40px] sm:text-6xl lg:text-[80px] text-center font-bold mb-6 text-white font-display w-full">
            {t("title")}
          </h1>

          <CountdownTimer />
          <Subscription />
        </div>
      </div>
    </section>
  );
}
