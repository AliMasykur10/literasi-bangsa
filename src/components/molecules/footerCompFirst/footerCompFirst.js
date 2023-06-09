import logo from "../../../assets/lliterasibangsa.svg";

export default function FooterCompFirst() {
  return (
    <>
      <div className="footer-component-first w-full sm:max-w-6xl mx-auto mb-5 sm:flex sm:justify-between p-2">
        <div className="footer-left">
          <img src={logo} alt="literasi bangsa" />
          <p>Probolinggo - Jawa Timur</p>
          <p>Telepon - 085-123-456-789</p>
          <p>Email - literasibangsa@gmail.com</p>
        </div>
        <div className="footer-right mt-10 grid grid-rows-5 grid-flow-col gap-y-2 sm:gap-y-4 sm:gap-x-10 ">
          <p>Nasional</p>
          <p>Daerah</p>
          <p>Internasional</p>
          <p>Ekonomi</p>
          <p>Olahraga</p>
          <p>Sepakbola</p>
          <p>Otomotif</p>
          <p>Hiburan</p>
          <p>Pendidikan</p>
          <p>Entertainment</p>
        </div>
      </div>
    </>
  );
}
