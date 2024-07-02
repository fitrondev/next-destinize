import { companyLogo } from "@/constants/data";
import Image from "next/image";

const Company = () => {
  return (
    <section className="py-10 sm:py-16">
      <div className="container flex flex-wrap items-center lg:items-start justify-center lg:justify-between gap-2">
        {companyLogo.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.alt}
            sizes="100%"
            width="100"
            height="100"
            loading="lazy"
            className="w-32 lg:w-44 h-14"
          />
        ))}
      </div>
    </section>
  );
};
export default Company;
