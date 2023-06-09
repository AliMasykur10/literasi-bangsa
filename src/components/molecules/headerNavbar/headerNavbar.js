import literasiBangsa from "../../../assets/lliterasibangsa.svg";
import navIcon from "../../../assets/navbar-icon.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";

export default function HeaderNavbar() {
  function handleClickNavbar(e) {
    e.preventDefault();
    console.log("navbar telah di tekan");
  }
  return (
    <nav className="relative w-full sm:max-w-6xl  mx-auto">
      <div className="first-comp flex justify-center items-center sm:justify-between px-4 py-5 ">
        <img src={navIcon} onClick={handleClickNavbar} alt="navbar icon" className="absolute left-0 ml-2 sm:hidden" />
        <img src={literasiBangsa} alt="literasi bangsa" className="logo-literasiBangsa w-36 sm:w-48" />
        <div class="right-part-nav  hidden sm:block sm:flex sm:items-center">
          <p className="mr-2">4 Juni 2023</p>|
          <div class="social-media-nav flex gap-2 ml-2">
            <img src={twitter} alt="" className=" w-6 " />
            <img src={instagram} alt="" className=" w-6 " />
            <img src={facebook} alt="" className=" w-6 " />
          </div>
        </div>
      </div>
    </nav>
  );
}
