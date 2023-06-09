import TerpopulerComp from "../../atoms/terpopulerComp/terpopulerComp";

export default function Terpopuler() {
  const row = [];
  for (let i = 1; i <= 10; i++) {
    row.push(<TerpopulerComp index={i} />);
  }
  return (
    <>
      <div className="terpopuler bg-slate-700 w-full sm:basis-4/12">
        <h1 className="font-bold text-2xl mb-4 ml-2">Terpopuler</h1>
        <hr className="mb-1" />
        <hr className="mb-7" />
        <div className="data-terpopuler">
          {row.map((items, index) => (
            <div key={index}>{items}</div>
          ))}
        </div>
      </div>
    </>
  );
}
