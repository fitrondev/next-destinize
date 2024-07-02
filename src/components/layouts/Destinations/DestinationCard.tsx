import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type DestinationCardProps = {
  data: {
    name: string;
    address: string;
    image: string;
  };
};

const DestinationCard = ({ data }: DestinationCardProps) => {
  return (
    <Card className="relative w-80 lg:w-72 h-[350px] sm:h-[400px] p-0 m-0 cursor-pointer rounded-lg border-none shadow-xl">
      <CardContent className="relative size-full">
        <Image
          src={data.image}
          alt=""
          sizes="100%"
          fill
          loading="lazy"
          className="object-cover brightness-75 hover:brightness-100 transition-all duration-300 ease-in-out rounded-lg"
        />
      </CardContent>
      <CardFooter className="max-w-max absolute left-0 bottom-0 flex flex-col gap-2 bg-background/70 rounded-tr-lg rounded-bl-lg py-2">
        <CardTitle>{data.name}</CardTitle>
        <CardDescription className="text-foreground">
          {data.address}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};
export default DestinationCard;
