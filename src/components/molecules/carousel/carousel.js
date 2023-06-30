import { useEffect, useState } from "react";
import budhis from "../../../assets/budhis.png";
import { Carousel, Typography } from "@material-tailwind/react";

export default function CarouselComp(data) {
  const localhost = "http://localhost:1337";

  const dataSliced = data.data.slice(0, 5);
  // console.log(localhost + item.attributes.thumbnile.data[0].attributes.url);
  return (
    <>
      <div className="carousel p-2 sm:p-0">
        <Carousel className="">
          {dataSliced.map((item) => {
            return (
              <div className="relative h-full w-full" key={item.id}>
                <img src={localhost + item.attributes.thumbnile.data[0].attributes.url} alt="1" className="w-full h-96 sm:h-[40rem] object-cover" />
                <div className="absolute inset-0 grid h-full w-full bottom-0 left-0 bg-gradient-to-t from-black">
                  <div className="w-3/4 md:w-2/4 absolute bottom-10 sm:bottom-2 left-7 sm:left-10">
                    <Typography variant="h1" color="white" className=" mb-2 sm:mb-4 text-sm  sm:text-2xl ">
                      {item.attributes.title}
                    </Typography>
                    <Typography variant="lead" color="white" className=" mb-2 sm:mb-12 opacity-80 text-xs sm:text-base">
                      5 Juni 2023
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
