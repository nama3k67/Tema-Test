import Link from "next/link";

interface DesktopNavbarItemProps {
  children: React.ReactNode;
  href: string;
}

export default function DesktopNavbarItem({
  children,
  href,
}: DesktopNavbarItemProps) {
  return (
    <li className="h-16 flex items-center justify-center text-sm uppercase font-bold">
      <Link
        href={`#${href}`}
        className="hover:text-white/60 transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}
