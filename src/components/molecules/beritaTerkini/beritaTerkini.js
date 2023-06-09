
import NewsComp from "../../atoms/newsComp/newsComp";

export default function BeritaTerkini() {
    const row = [];
  for (let i = 1; i <= 10; i++) {
    row.push(<NewsComp />);
  }
    return (
        <>
        <div className="breaking-news w-full sm:basis-8/12">
            <h1 className="font-bold text-2xl mb-4 ml-2">Berita Terkini</h1>
            <hr className="mb-1" />
            <hr className="mb-7" />
            <div className="data-terlooping p-2">
              {row.map((items, index) => (
                <div key={index}>{items}</div>
              ))}
            </div>
          </div>
        </>
    )
}