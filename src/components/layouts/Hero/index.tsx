import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="container h-[calc(100vh-65px)] flex flex-col lg:flex-row lg:items-center">
        <div className="w-full h-full lg:h-[500px] flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10">
          <div className="h-full lg:flex-1 flex flex-col items-center lg:items-start justify-center gap-2 sm:gap-5">
            <div className="max-w-max px-3 py-2 bg-primary/50 rounded-full">
              ✈ • Explore the wonderful indonesia!
            </div>

            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2 sm:gap-5">
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-center lg:text-start">
                Liburan & nikmati tempat baru di indonesia
              </h1>

              <p className="text-sm sm:text-base sm:max-w-[477px] font-medium text-muted-foreground text-center lg:text-start">
                Destinize membuat kamu selalu update terkait tempat liburan baru
                di Indonesia dengan mengikuti perkembangan para influencer di
                sosial media.
              </p>
            </div>

            <div>
              <Button className="gap-1">
                <span>Mulai Sekarang</span>
                <ArrowRight className="size-4 text-background" />
              </Button>
            </div>
          </div>

          <div className="h-full lg:flex-1 flex items-center justify-center">
            <div className="size-[300px] sm:size-[480px] bg-primary/50 rounded-full flex items-center justify-center">
              <div className="relative size-[200px] sm:size-[300px]">
                <Image
                  src={"/assets/images/hero.svg"}
                  alt=""
                  sizes="100%"
                  fill
                  priority
                  className="size-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
