import axios from "axios";
import Cards from "./Cards";
import Loader from "../components/Loader";
import Problem from "../components/Problem";
import useSWR from "swr";
import Img from "../assets/images/pattarai-black.png";

export default function LandingPage() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data: res, error: err } = useSWR(
    "https://opencloud-dev.herokuapp.com",
    fetcher
  );
  if (err) {
    return <Problem />;
  }
  if (!res) {
    return <Loader />;
  }

  return (
    <>
      <section className="landing-main">
        <div className="head-section">
          <div>
            <p className="mb-0 pattarai-text">PATTARAI'S</p>
            <h1 className="mb-5 server-status">Server Status</h1>
          </div>
          <img src={Img} alt="" />
          {/* <p>{time} </p> */}
        </div>
        <section className="card-grid">
          {res.device_status.map((data, id) =>
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
  );
}
