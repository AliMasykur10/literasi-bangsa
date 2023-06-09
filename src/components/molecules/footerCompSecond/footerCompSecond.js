export default function FooterCompSecond() {
  return (
    <>
      <div className="footer-component-second w-full sm:max-w-6xl mx-auto mb-10 flex flex-col sm:flex-row sm:justify-between p-2">
        <div className="footer-second-left flex gap-x-5 mb-3">
          <p className="pr-3 text-xs sm:text-base sm:pr-4 border-r-2 ">tentang kami</p>
          <p className="pr-3 text-xs sm:text-base sm:pr-4 border-r-2 ">readaksi</p>
          <p className="pr-3 text-xs sm:text-base sm:pr-4 border-r-2 ">info iklan</p>
        </div>
        <p className="text-xs sm:text-base  ">@2023 literasi bangsa media</p>
      </div>
    </>
  );
}
