"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinksData } from "@/constants/data";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {navLinksData.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "text-sm font-semibold hover:text-primary transition-colors duration-300 ease-in-out",
            pathname === item.href && "text-primary"
          )}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;
