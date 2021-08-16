import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import Cards from "./Cards";
import Img from "../assets/images/logo.png";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    {
      host: "myself",
      status: "offline",
      "ip address": "121121341",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://opencloud-dev.herokuapp.com")
      .then((res) => {
        setData(res.data["device status"]);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="landing-main">
            <div className="heading-section">
              <div className="">
                <p className="mb-0 pattarai-text">PATTARAI'S</p>
                <h1 className="mb-5 server-status">Server Status</h1>
              </div>
              <img src={Img} alt="" />
            </div>
            <section className="card-grid">
              {data.map((data, id) =>
                data.status === "offline" ? (
                  <div className="offline-card" key={id}>
                    <Cards data={data} />
                  </div>
                ) : (
                  <div className="online-div" key={id}>
                    <Cards data={data} />
                  </div>
                )
              )}
            </section>
          </div>
        </>
      )}
    </>
  );
}
