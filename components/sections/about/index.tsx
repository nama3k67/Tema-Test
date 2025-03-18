import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

import { ROUTES } from "@/shared/constants";

import CalendarIcon from "@/shared/images/icons/calendar-tick.svg";
import PenToolIcon from "@/shared/images/icons/pen-tool.svg";
import PeopleIcon from "@/shared/images/icons/people.svg";
import Illustrator from "@/shared/images/Illustrator.svg";
import Map from "@/shared/images/map.svg";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id={ROUTES.ABOUT} className="lg:pt-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="px-4">
            <h1 className="text-[40px] sm:text-6xl lg:text-[80px] font-bold mb-4 font-display w-full">
              {t("title")}
            </h1>
            <p className="text-sm">{t("description")}</p>

            <div className="flex lg:flex-col gap-4 mt-10">
              <div className="text-blue-500 font-bold">
                <span className="text-5xl">600</span>
                <span className="text-lg">{t("million")}</span>
                <span className="text-4xl">+</span>
                <div className="text-black text-2xl">{t("users")}</div>
              </div>
              <div className="text-blue-500 font-bold">
                <span className="text-5xl">135</span>
                <span className="text-lg">{t("million")}</span>
                <span className="text-4xl">+</span>
                <div className="text-black text-2xl">{t("games")}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-10 py-10 px-4 bg-[#EEEEEE]">
            <div className="flex space-x-5">
              <div className="flex flex-none justify-center items-center h-10 w-10 rounded-full bg-blue-50">
                <Image
                  src={CalendarIcon}
                  alt="Calendar Icon"
                  width={20}
                  height={20}
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">{t("24/7")}</h2>
                <p className="text-sm text-[#757575]">
                  {t("24/7_description")}
                </p>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="flex flex-none justify-center items-center h-10 w-10 rounded-full bg-blue-50">
                <Image
                  src={PenToolIcon}
                  alt="PenTool Icon"
                  width={20}
                  height={20}
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">{t("Design")}</h2>
                <p className="text-sm text-[#757575]">
                  {t("Design_description")}
                </p>
              </div>
            </div>

            <div className="flex space-x-5">
              <div className="flex flex-none justify-center items-center h-10 w-10 rounded-full bg-blue-50">
                <Image
                  src={PeopleIcon}
                  alt="People Icon"
                  width={20}
                  height={20}
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">{t("Team")}</h2>
                <p className="text-sm text-[#757575]">
                  {t("Team_description")}
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col items-center">
            <Image
              src={Illustrator}
              alt="Illustrator"
              width={500}
              height={500}
              className="animate-wiggle"
            />
            <Image
              src={Map}
              alt="Map"
              width={500}
              height={500}
              className="-mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
