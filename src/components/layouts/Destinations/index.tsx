import { destinationData } from "@/constants/data";
import DestinationCard from "./DestinationCard";
import { Button } from "@/components/ui/button";

const Destinations = () => {
  return (
    <section className="py-10 lg:py-16">
      <div className="container space-y-10">
        <div className="space-y-2 lg:space-y-5">
          <span className="sm:text-lg font-bold uppercase text-primary">
            Destinasi Favorit
          </span>

          <div className="flex sm:items-center sm:justify-between">
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold">
              ✈ • Temukan Destinasi Favoritmu{" "}
            </h3>

            <Button variant={"link"} className="hidden sm:flex">
              Lihat Semua &gt;
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-5 sm:gap-5 lg:gap-0">
          {destinationData.map((item, index) => (
            <DestinationCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Destinations;
