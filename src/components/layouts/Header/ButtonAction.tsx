import { Button } from "@/components/ui/button";
import { Languages, Search } from "lucide-react";

const ButtonAction = () => {
  return (
    <>
      <Button size={"icon"} variant={"ghost"}>
        <Search />
      </Button>

      <Button size={"icon"} variant={"ghost"}>
        <Languages />
      </Button>

      <Button className="hidden lg:flex">Login</Button>
    </>
  );
};
export default ButtonAction;
