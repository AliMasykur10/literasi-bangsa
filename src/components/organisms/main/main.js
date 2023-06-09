import BeritaTerkini from "../../molecules/beritaTerkini/beritaTerkini";
import CarouselComp from "../../molecules/carousel/carousel";

export default function Main() {
  return (
    <>
      <main className="w-full sm:max-w-6xl mx-auto mt-10">
        <CarouselComp />
        <div className="content md:flex md:flex-row md:gap-10 mt-10">
          <BeritaTerkini />
          <div className="terpopuler bg-slate-700 w-full h-12 sm:basis-4/12">
            <h1 className="font-bold text-2xl mb-4 ml-2">Terpopuler</h1>
            <hr className="mb-1" />
            <hr className="mb-7" />
            <div className="terpopuler-comp"></div>
          </div>
        </div>
      </main>
    </>
  );
}
