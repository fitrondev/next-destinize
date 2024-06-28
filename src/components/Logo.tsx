import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/assets/icons/logo.svg"} alt="" width={28} height={28} />
    </Link>
  );
};
export default Logo;
