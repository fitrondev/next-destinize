import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { navLinksData } from "@/constants/data";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-primary size-8 rounded-md text-white flex items-center justify-center">
        <AlignJustify />
      </SheetTrigger>
      <SheetContent className="h-full flex flex-col items-center justify-center">
        {navLinksData.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-2xl font-bold hover:text-primary transition-colors duration-300 ease-in-out">
            {item.name}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
