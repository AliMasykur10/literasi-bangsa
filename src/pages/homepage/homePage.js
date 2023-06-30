import axios from "axios";
import Footer from "../../components/organisms/footer/footer";
import Header from "../../components/organisms/header/header";
import Main from "../../components/organisms/main/main";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  const url = "http://localhost:1337/api/posts?sort=id:DESC&populate=categori&populate=thumbnile";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setdata(res.data.data);
        setloading(false);
        seterror(null);
      })
      .catch((err) => {
        setloading(false);
        seterror(err.message);
      });
  }, []);

  if (loading) {
    console.log("loading...");
  }

  if (error) {
    console.log("error");
  }

  return (
    <>
      <Header />
      <Main data={data} />
      <Footer />
    </>
  );
}
