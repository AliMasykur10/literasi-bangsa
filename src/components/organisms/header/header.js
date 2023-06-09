import FooterNavbar from "../../molecules/footerNavbar/footerNavbar";
import HeaderNavbar from "../../molecules/headerNavbar/headerNavbar";

export default function Header() {
  return (
    <>
      <div className="w-full">
        <HeaderNavbar />
        <hr className="w-full" />
        <FooterNavbar />
        <hr className="w-full hidden sm:block " />
      </div>
    </>
  );
}
