import Image from "next/image";
import Link from "next/link";

import LocaleSwitcher from "../shared/localeSwitcher";
import DesktopNavigation from "./navbar/desktop";
import MobileNavigation from "./navbar/mobile";

import ChildHeroBg from "@/shared/images/child-hero-bg.svg";
import WitchHero from "@/shared/images/witch_hero.png";

export default function Header() {
  return (
    <header>
      <div className="absolute inset-x-0 top-0 -z-10">
        <Image
          src="/mobile-bg.svg"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-full max-w-none lg:w-full sm:hidden"
          priority
        />
        <Image
          src="/bg-hero.png"
          alt="Background"
          width={1920}
          height={1080}
          className="relative hidden sm:block w-full h-screen max-w-none object-cover"
          priority
        />
        <div className="relative">
          <Image
            src={WitchHero}
            alt="Witch Hero"
            width={500}
            height={500}
            className="absolute left-1/6 sm:lef bottom-0 z-10"
          />
          <Image
            src={ChildHeroBg}
            alt="Hero Background"
            layout="fill"
            objectPosition="top"
            className="absolute top-0 left-0 z-0"
          />
        </div>
      </div>

      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="font-bold text-xl z-10">
            <Image
              src="/white-logo.svg"
              className="w-auto h-10 sm:h-16"
              alt="Z-Tech Logo"
              width={68}
              height={40}
            />
          </Link>

          <div className="hidden sm:flex items-center justify-end space-x-10 w-full">
            <DesktopNavigation />
            <LocaleSwitcher className="bg-transparent border-none [&_svg]:!text-white cursor-pointer" />
          </div>

          <MobileNavigation />
        </div>
      </nav>
    </header>
  );
}
