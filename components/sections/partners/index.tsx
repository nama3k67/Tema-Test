import { useTranslations } from "next-intl";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ROUTES } from "@/shared/constants";
import { PARTNERS_LOGOS } from "./constant";

export default function Partners() {
  const t = useTranslations("partners");

  return (
    <section id={ROUTES.PARTNERS} className="py-10 bg-[#f6f6f6] mt-12">
      <div className="container mx-auto">
        <h1 className="text-[40px] sm:text-6xl lg:text-[80px] text-center font-bold mb-10 font-display w-full">
          {t("title")}
        </h1>
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-3xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl"
          >
            <CarouselContent className="-mx-40">
              {PARTNERS_LOGOS.map((logo, index) => (
                <CarouselItem className="-ml-1 basis-1/3 md:basis-1/5 lg:basis-1/7" key={index}>
                  <Image src={logo} alt={`Partner Logo ${index + 1}`} className="w-44" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="rounded-md shadow-md" />
            <CarouselNext className="rounded-md shadow-md" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}