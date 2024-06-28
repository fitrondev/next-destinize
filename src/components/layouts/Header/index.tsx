import Logo from "@/components/Logo";
import NavLinks from "./NavLinks";
import ButtonAction from "./ButtonAction";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <Logo /> <span className="text-lg font-bold">Destinize</span>
          </div>

          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ButtonAction />

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
