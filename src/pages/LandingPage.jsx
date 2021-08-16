import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import Loader from "../components/Loader";
import Problem from "../components/Problem";
import Img from "../assets/images/pattarai-black.png";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://opencloud-dev.herokuapp.com")
      .then((res) => {
        setData(res.data["device status"]);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Problem />
      ) : (
        <>
          <section className="landing-main">
            <div className="head-section">
              <div>
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
                  <div key={id}>
                    <Cards data={data} />
                  </div>
                )
              )}
            </section>
          </section>
        </>
      )}
    </>
  );
}
