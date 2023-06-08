import literasiBangsa from "../../assets/lliterasibangsa.svg";
import navIcon from "../../assets/navbar-icon.svg";

export default function HomePage() {
  function handleClickNavbar(e) {
    e.preventDefault();
    console.log("navbar telah di tekan");
  }
  return (
    <>
      <nav className="relative">
        <div className="first-comp flex justify-center items-center md:justify-normal p-2 ">
          <img src={navIcon} onClick={handleClickNavbar} alt="navbar icon" className="absolute left-0 ml-2 md:hidden" />
          <img src={literasiBangsa} alt="literasi bangsa" className="logo-literasiBangsa w-32 sm:w-48" />
        </div>
        <hr className="w-full" />
      </nav>
    </>
  );
}
