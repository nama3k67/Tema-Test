"use client";

import clsx from "clsx";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

import US_Flag from "@/shared/images/us-flag.png";
import VN_Flag from "@/shared/images/vi-flag.png";

interface LocaleSwitcherProps {
  className?: string;
}

export default function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [selectedLocale, setSelectedLocale] = useState(locale);

  const handleLocaleChange = (newLocale: string) => {
    setSelectedLocale(newLocale);
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select
      defaultValue={locale}
      value={selectedLocale}
      onValueChange={handleLocaleChange}
    >
      <SelectTrigger className={clsx("bg-[#f6f6f6]", className)}>
        <Image
          src={selectedLocale === "en" ? US_Flag : VN_Flag}
          alt="Flag"
          width={24}
          height={24}
        />
      </SelectTrigger>

      <SelectContent align="end">
        <SelectItem value="en">
          <Image src={US_Flag} alt="US Flag" width={24} height={24} />
          <span className="font-bold">English</span>
        </SelectItem>
        <SelectItem value="vi">
          <Image src={VN_Flag} alt="VN Flag" width={24} height={24} />
          <span className="font-bold">Vietnamese</span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
