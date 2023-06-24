import literasiBangsa from "../../../assets/lliterasibangsa.svg";
import navIcon from "../../../assets/navbar-icon.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";
import { Link } from "react-router-dom";
import CurrentDate from "../../../utils/currentDate/CurrentDate";

export default function HeaderNavbar() {
  function handleClickNavbar(e) {
    e.preventDefault();
    console.log("navbar telah di tekan");
  }
  console.log(CurrentDate());

  return (
    <nav className="relative w-full sm:max-w-6xl  mx-auto">
      <div className="first-comp flex justify-center items-center sm:justify-between px-4 py-5 ">
        <img src={navIcon} onClick={handleClickNavbar} alt="navbar icon" className="absolute left-0 ml-2 sm:hidden" />
        <Link to={"/"}>
          <img src={literasiBangsa} alt="literasi bangsa" className="logo-literasiBangsa w-36 sm:w-52" />
        </Link>
        <div className="right-part-nav  hidden  sm:flex sm:items-center">
          <p className="mr-2">
            {" "}
            <CurrentDate />{" "}
          </p>
          |
          <div className="social-media-nav flex gap-2 ml-2">
            <img src={twitter} alt="" className=" w-6 " />
            <img src={instagram} alt="" className=" w-6 " />
            <img src={facebook} alt="" className=" w-6 " />
          </div>
        </div>
      </div>
    </nav>
  );
}
