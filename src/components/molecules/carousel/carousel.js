import CarouselItem from "../../atoms/carouselItem/carouselItem";

export default function Carousel() {
  return (
    <>
      <div class="carousel">
        <h1>carousel component</h1>
        <CarouselItem>
          <div className="satu w-80 h-12 bg-slate-400"></div>
          <div className="dua h-12 bg-slate-500"></div>
          <div className="tiga  h-12 bg-slate-600"></div>
        </CarouselItem>
      </div>
    </>
  );
}
