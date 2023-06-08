export default function CarouselItem({ children: slides }) {
  return (
    <>
      <div className="overflow-hidden">
        <div className="flex ">{slides}</div>
      </div>
    </>
  );
}
