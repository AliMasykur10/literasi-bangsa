import budhis from "../../../assets/budhis.png";

export default function CarouselComp() {
  return (
    <>
      <div className="carousel">
        <div className="carousel-img px-2 sm:px-4 flex overflow-x-auto gap-2">
          <img src={budhis} alt="budhis" className=" w-full" />
          <img src={budhis} alt="budhis" className=" w-full" />
          <img src={budhis} alt="budhis" className=" w-full" />
        </div>
        <div className="carousel-pagination flex gap-4 justify-center mt-4">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <div className="w-4 h-4 border-2 border-black rounded-full"></div>
          <div className="w-4 h-4  border-2 border-black rounded-full"></div>
        </div>
      </div>
    </>
  );
}
