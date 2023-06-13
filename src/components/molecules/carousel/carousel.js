import budhis from "../../../assets/budhis.png";
import { Carousel, Typography } from "@material-tailwind/react";

export default function CarouselComp() {
  return (
    <>
      <div className="carousel p-2 sm:p-0">
        <Carousel className="">
          <div className="relative h-full w-full">
            <img src={budhis} alt="1" className="w-full object-cover" />
            <div className="absolute inset-0 grid h-full w-full bottom-0 left-0 bg-gradient-to-t from-black">
              <div className="w-3/4 md:w-2/4 absolute bottom-5 left-7 sm:left-10">
                <Typography variant="h1" color="white" className="sm:mb-4 text-xs  sm:text-4xl ">
                  Ritual Thudong Biksu Thailand Beri Dampak Ekonomi untuk Candi Borobudur
                </Typography>
                <Typography variant="lead" color="white" className=" mb-2 sm:mb-12 opacity-80 text-xs sm:text-base">
                  5 Juni 2023
                </Typography>
              </div>
            </div>
          </div>

          <div className="relative h-full w-full">
            <img src={budhis} alt="1" className="w-full object-cover" />
            <div className="absolute inset-0 grid h-full w-full bottom-0 left-0 bg-gradient-to-t from-black">
              <div className="w-3/4 md:w-2/4 absolute bottom-5 left-7 sm:left-10">
                <Typography variant="h1" color="white" className="sm:mb-4 text-xs  sm:text-4xl ">
                  Ritual Thudong Biksu Thailand Beri Dampak Ekonomi untuk Candi Borobudur
                </Typography>
                <Typography variant="lead" color="white" className=" mb-2 sm:mb-12 opacity-80 text-xs sm:text-base">
                  5 Juni 2023
                </Typography>
              </div>
            </div>
          </div>
np
          <div className="relative h-full w-full">
            <img src={budhis} alt="1" className="w-full object-cover" />
            <div className="absolute inset-0 grid h-full w-full bottom-0 left-0 bg-gradient-to-t from-black">
              <div className="w-3/4 md:w-2/4 absolute bottom-5 left-7 sm:left-10">
                <Typography variant="h1" color="white" className="sm:mb-4 text-xs  sm:text-4xl ">
                  Ritual Thudong Biksu Thailand Beri Dampak Ekonomi untuk Candi Borobudur
                </Typography>
                <Typography variant="lead" color="white" className=" mb-2 sm:mb-12 opacity-80 text-xs sm:text-base">
                  5 Juni 2023
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
