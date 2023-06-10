import NewsSummary from "../../components/molecules/beritaTerkini/beritaTerkini";
import Terpopuler from "../../components/molecules/terpopuler/terpopuler";
import Footer from "../../components/organisms/footer/footer";
import Header from "../../components/organisms/header/header";

export default function CategoriPage() {
  return (
    <>
      <Header />
      <div className="w-full sm:flex sm:max-w-6xl mx-auto gap-4 mt-10">
        <NewsSummary titleNews={"Daerah"} className="basis-8/12" />
        <Terpopuler />
      </div>
      <Footer />
    </>
  );
}
