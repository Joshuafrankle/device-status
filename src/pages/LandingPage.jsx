import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import Cards from "./Cards";
// import Img from "../assets/images/server.png";

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
          <section className="landing-main">
            {data.map((data, id) =>
              data.status === "offline" ? (
                <div className="offline-card" key={id}>
                  <Cards data={data} />
                </div>
              ) : (
                <div className="" key={id} style={{ width: "100%" }}>
                  <Cards data={data} />
                </div>
              )
            )}
          </section>
        </>
      )}
    </>
  );
}
