export default function TerpopulerComp({ index }) {
  return (
    <>
      <div>
        <div className="terpopuler-comp flex items-center pb-4 ">
          <div className="w-36 flex justify-center ">
            <p className=" font-bold text-4xl">{index}</p>
          </div>
          <h2 className="font-bold text-sm sm:text-lg">Gerombolan remaja di sukabumi diamankan polisi usai konvoi sambil acungkan sajam</h2>
        </div>
        <hr className="mb-2" />
      </div>
    </>
  );
}
