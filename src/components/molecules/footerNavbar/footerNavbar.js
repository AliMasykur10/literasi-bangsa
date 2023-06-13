import { Link } from "react-router-dom";

export default function FooterNavbar() {
  return (
    <>
      <nav className=" w-full sm:max-w-6xl mx-auto hidden sm:block overflow-x-auto">
        <ul className=" flex justify-between gap-4 px-4 py-3">
          <li>
            <Link to={"/categori/Nasional"}>NASIONAL</Link>
          </li>
          <li>
            <Link to={"/categori/Internasional"}>INTERNASIONAL</Link>
          </li>
          <li>
            <Link to={"/categori/Ekonomi"}> EKONOMI </Link>
          </li>
          <li>
            <Link to={"/categori/Sepakbola"}>SEPAKBOLA</Link>
          </li>
          <li>
            <Link to={"/categori/Olahraga"}>OLAHRAGA</Link>
          </li>
          <li>
            <Link to={"/categori/Otomotif"}>OTOMOTIF</Link>
          </li>
          <li>
            <Link to={"/categori/Teknologi"}>TEKNOLOGI</Link>
          </li>
          <li>
            <Link to={"/categori/Entertainment"}>ENTERTAINMENT</Link>
          </li>
          <li>
            <Link to={"/categori/Hiburan"}>HIBURAN</Link>
          </li>
          <li>
            <Link to={"/categori/Pendidikan"}>PENDIDIKAN</Link>
          </li>
          <li>
            <Link to={"/categori/Daerah"}>DAERAH</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
