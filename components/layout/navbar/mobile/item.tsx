import Link from "next/link";

interface MobileNavbarItemProps {
  children: React.ReactNode;
  href: string;
}

export default function MobileNavbarItem({
  children,
  href,
}: MobileNavbarItemProps) {
  return (
    <li className="h-16 flex items-center justify-center text-sm uppercase font-bold not-last:border-b">
      <Link href={`#${href}`}>{children}</Link>
    </li>
  );
}
