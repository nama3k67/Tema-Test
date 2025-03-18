"use client";

import Countdown, { CountdownRenderProps } from "react-countdown";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function CountdownTimer() {
  const t = useTranslations("hero");

  const [targetDate] = useState(() => {
    const date = new Date('2025-04-17T00:00:00');
    return date.getTime();
  });

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return (
        <span className="font-bold text-2xl">{t("reach_launch_day")}</span>
      );
    }

    const formatNumber = (num: number) => String(num).padStart(2, "0");

    return (
      <div className="flex items-center space-x-4 sm:space-x-12 font-bold mx-auto">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-display">
            {formatNumber(days)}
          </span>
          <span className="text-xs md:text-sm mt-2">{t("days")}</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-display">
            {formatNumber(hours)}
          </span>
          <span className="text-xs md:text-sm mt-2">{t("hours")}</span>
        </div>
        <span>:</span>

        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-display">
            {formatNumber(minutes)}
          </span>
          <span className="text-xs md:text-sm mt-2">{t("minutes")}</span>
        </div>
        <span>:</span>

        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-display">
            {formatNumber(seconds)}
          </span>
          <span className="text-xs md:text-sm mt-2">{t("seconds")}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white py-6 md:py-7 px-7 md:px-10 rounded-2xl shadow-lg w-full md:w-fit flex justify-center items-center">
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
}
