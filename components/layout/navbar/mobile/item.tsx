"use client";

import Link from "next/link";
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
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <li className="h-16 flex items-center justify-center text-sm uppercase font-bold not-last:border-b">
      <Link href={`#${href}`} onClick={handleClick}>
        {children}
      </Link>
    </li>
  );
}
