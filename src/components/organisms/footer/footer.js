import FooterCompFirst from "../../molecules/footerCompFirst/footerCompFirst";
import FooterCompSecond from "../../molecules/footerCompSecond/footerCompSecond";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <hr className="mb-5" />
        <FooterCompFirst />
        <hr className="mb-5 w-full sm:max-w-6xl mx-auto" />
        <FooterCompSecond />
      </div>
    </>
  );
}
