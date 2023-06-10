import NewsSummary from "../../molecules/beritaTerkini/beritaTerkini";
import CarouselComp from "../../molecules/carousel/carousel";
import Terpopuler from "../../molecules/terpopuler/terpopuler";

export default function Main() {
  return (
    <>
      <main className="w-full sm:max-w-6xl mx-auto mt-10">
        <CarouselComp />
        <div className="content md:flex md:flex-row md:gap-10 mt-10">
          <NewsSummary titleNews={"Berita Terkini"} />
          <Terpopuler />
        </div>
      </main>
    </>
  );
}
