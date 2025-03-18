import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import LocaleSwitcher from "@/components/shared/localeSwitcher";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NAVBAR_ITEMS } from "../constant";
import MobileNavbarItem from "./item";

export default function MobileNavigation() {
  const t = useTranslations("navigation");

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          asChild
          className="sm:hidden w-10 bg-transparent h-10"
          size="icon"
        >
          <Menu className="!h-10 !w-10 sm:hidden" color="white" />
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col w-full h-full rounded-none">
        <DialogHeader className="h-fit">
          <DialogTitle className="-mt-1">
            <LocaleSwitcher />
          </DialogTitle>
          <DialogDescription hidden>Mobile Navigation</DialogDescription>
        </DialogHeader>

        <nav>
          <ul>
            {NAVBAR_ITEMS.map((item) => (
              <MobileNavbarItem key={item.name} href={item.href}>
                {t(item.name)}
              </MobileNavbarItem>
            ))}
          </ul>
        </nav>
      </DialogContent>
    </Dialog>
  );
}
