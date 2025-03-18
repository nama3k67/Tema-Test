import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import AddressIcon from "@/shared/images/icons/address.svg";
import FacebookIcon from "@/shared/images/icons/facebook.svg";
import LinkedInIcon from "@/shared/images/icons/linkedin.svg";
import MobileIcon from "@/shared/images/icons/mobile.svg";
import TwitterIcon from "@/shared/images/icons/twitter.svg";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer>
      <div className="bg-[url(../shared/images/footer-bg.png)] bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4 py-8 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="flex flex-col items-center sm:items-start">
              <Image
                src="/white-logo.svg"
                alt="Company Logo"
                width={160}
                height={96}
              />
              <div className="flex space-x-6 mt-10">
                <Link href="https://twitter.com" target="_blank">
                  <Image
                    src={TwitterIcon}
                    alt="Twitter"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href="https://facebook.com" target="_blank">
                  <Image
                    src={FacebookIcon}
                    alt="Facebook"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <Image
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>
            <div className="hidden xl:block" />
            <div>
              <h2 className="font-bold text-xl text-white mb-4">
                {t("address")}
              </h2>

              <div className="flex items-start space-x-2 mb-5">
                <Image src={AddressIcon} alt="Address" height={40} />
                <div className="text-white text-sm">
                  <p className="mb-3">{t("first_address")}</p>
                  <p>{t("second_address")}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Image src={MobileIcon} alt="Mobile" height={40} />
                <p className="text-white text-sm">
                  (+1) 555-0108-000 {t("or")} (+236) 555-0108
                </p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h2 className="font-bold text-xl text-white mb-4">
                {t("subscribe")}
              </h2>
              <p className="text-white text-sm">{t("subscribe_description")}</p>

              <div className="flex justify-center mt-4">
                <div className="w-full relative">
                  <input
                    type="email"
                    placeholder={t("email_placeholder")}
                    className="px-4 py-2 rounded-md text-white w-full h-14 border border-white"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2 absolute right-4 top-0 h-full"
                    asChild
                  >
                    <ArrowRight color="white" className="w-7 h-7" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
        </div>
      </div>

      <div className="flex justify-center items-center h-20 bg-black">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Copyright. Policy.
        </p>
      </div>
    </footer>
  );
}
