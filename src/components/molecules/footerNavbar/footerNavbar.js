import { Link } from "react-router-dom";

export default function FooterNavbar() {
  return (
    <>
      <nav className=" w-full sm:max-w-6xl mx-auto hidden sm:block overflow-x-auto">
        <ul className=" flex justify-between gap-4 px-4 py-3">
          <li>
            <Link to={"/categori"}>NASIONAL</Link>
          </li>
          <li>INTERNASIONAL</li>
          <li>EKONOMI</li>
          <li>SEPAKBOLA</li>
          <li>OLAHRAGA</li>
          <li>OTOMOTIF</li>
          <li>TEKNOLOGI</li>
          <li>ENTERTAINMENT</li>
          <li>HIBURAN</li>
          <li>PENDIDIKAN</li>
          <li>DAERAH</li>
        </ul>
      </nav>
    </>
  );
}
