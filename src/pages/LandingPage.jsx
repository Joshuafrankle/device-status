import axios from "axios";
import useSWR from "swr";
import Cards from "./Cards";
import FadeIn from "../components/FadeIn";
import Loader from "../components/Loader";
import Problem from "../components/Problem";
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
  if (res) {
    var time = res.updated_time.split(" ")[1];
    var date = res.updated_time.split(" ")[0];
  }

  return (
    <>
      <FadeIn>
        <section className="landing-main">
          <div className="head-section mb-5">
            <img src={Img} alt="" />
            <div className="text-center">
              <p className="mb-0 pattarai-text">PATTARAI'S</p>
              <h1 className="server-status">Server Status</h1>
            </div>
            <div className="date-time">
              <span>{time} </span>
              <span>{date}</span>
            </div>
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
      </FadeIn>
    </>
  );
}
