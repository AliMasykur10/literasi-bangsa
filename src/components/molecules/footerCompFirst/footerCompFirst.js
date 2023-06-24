import { Link } from "react-router-dom";
import logo from "../../../assets/lliterasibangsa.svg";

export default function FooterCompFirst() {
  return (
    <>
      <div className="footer-component-first w-full sm:max-w-6xl mx-auto mb-5 sm:flex sm:justify-between p-2">
        <div className="footer-left">
          <Link to="/">
            <img src={logo} alt="literasi bangsa" />
          </Link>
          <p>Probolinggo - Jawa Timur</p>
          <p>Telepon - 085-123-456-789</p>
          <p>Email - literasibangsa@gmail.com</p>
        </div>
        <div className="footer-right mt-10 grid grid-rows-5 grid-flow-col gap-y-2 sm:gap-y-4 sm:gap-x-10 ">
          <Link to="/categori/Nasional">
            <p>Nasional</p>
          </Link>
          <Link to="/categori/Daerah">
            <p>Daerah</p>
          </Link>
          <Link to="/categori/Internasional">
            <p>Internasional</p>
          </Link>
          <Link to="/categori/Ekonomi">
            <p>Ekonomi</p>
          </Link>
          <Link to="/categori/Olahraga">
            <p>Olahraga</p>
          </Link>
          <Link to="/categori/Sepakbola">
            <p>Sepakbola</p>
          </Link>
          <Link to="/categori/Otomotif">
            <p>Otomotif</p>
          </Link>
          <Link to="/categori/Hiburan">
            <p>Hiburan</p>
          </Link>
          <Link to="/categori/Pendidikan">
            <p>Pendidikan</p>
          </Link>
          <Link to="/categori/Entertainment">
            <p>Entertainment</p>
          </Link>
        </div>
      </div>
    </>
  );
}
