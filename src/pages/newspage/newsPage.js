import Terpopuler from "../../components/molecules/terpopuler/terpopuler";
import Footer from "../../components/organisms/footer/footer";
import Header from "../../components/organisms/header/header";

import NewsFirstComp from "../../components/molecules/newsFirstComp/newsFirstComp";

export default function NewsPage() {
  return (
    <>
      <Header />
      <div className="news-component w-full sm:flex sm:max-w-6xl mx-auto gap-4 mt-10">
        <NewsFirstComp />
        <Terpopuler />
      </div>
      <Footer />
    </>
  );
}
