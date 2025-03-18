import { useTranslations } from "next-intl";
import { ComponentPropsWithoutRef } from "react";

import { NAVBAR_ITEMS } from "../constant";
import DesktopNavbarItem from "./item";

export default function DesktopNavigation({
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const t = useTranslations("navigation");

  return (
    <div {...props}>
      <ul className="flex items-center space-x-8 lg:space-x-20 text-white">
        {NAVBAR_ITEMS.map((item) => (
          <DesktopNavbarItem key={item.name} href={item.href}>
            {t(item.name)}
          </DesktopNavbarItem>
        ))}
      </ul>
    </div>
  );
}
