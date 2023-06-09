import news from "../../../assets/news.png";

export default function NewsComp() {
  return (
    <>
      <div className="breaking-news-comp mb-4">
        <div className=" w-full flex gap-3">
          <img src={news} alt="news" className=" w-20  object-cover  sm:w-full " />
          <div className="news-desc ">
            <p className=" bg-red-news text-xs sm:text-base w-fit px-2 py-1 rounded-r text-white-color mb-2 ">Berita Daerah</p>
            <h2 className=" font-bold text-sm sm:text-lg mb-2 text-clip">Gerombolan remaja di sukabumi diamankan polisi usai konvoi sambil acungkan sajam</h2>
            <p className="text-sky-400 text-xs sm:etxt-base">5 juni 2023, 14.20</p>
          </div>
        </div>
      </div>
    </>
  );
}
