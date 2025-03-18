"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface MobileNavbarItemProps {
  href: string;
  children: React.ReactNode;
  setOpen: (open: boolean) => void;
}

export default function MobileNavbarItem({
  children,
  href,
  setOpen,
}: MobileNavbarItemProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    // Allow the dialog animation to complete before navigating
    setTimeout(() => {
      router.push(`#${href}`);
    }, 100);
  };

  return (
    <li className="h-16 flex items-center justify-center text-sm uppercase font-bold not-last:border-b">
      <Link onClick={handleClick} href={`#${href}`}>
        {children}
      </Link>
    </li>
  );
}
