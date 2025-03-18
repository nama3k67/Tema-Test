import { ROUTES } from "@/shared/constants";

type NavbarItem = {
  name: string;
  href: string;
};

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    name: "about",
    href: ROUTES.ABOUT,
  },
  {
    name: "games",
    href: ROUTES.GAMES,
  },
  {
    name: "partners",
    href: ROUTES.PARTNERS,
  },
  {
    name: "contact",
    href: ROUTES.CONTACT,
  },
];