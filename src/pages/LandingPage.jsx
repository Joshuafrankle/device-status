import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import Img from "../assets/images/server.png";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://opencloud-dev.herokuapp.com")
      .then((res) => {
        setData(res.data["device status"]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="landing-main">
            {data.map((data, id) => (
              <div className="card mb-3" key={id}>
                <div className="card-body">
                  <img src={Img} alt="image" />
                  <div className="label-section fw-bold">
                    <p> Hostname:</p>
                    <p> Status:</p>
                    <p> Address:</p>
                  </div>
                  <div className="details-section">
                    <p>{data.host}</p>
                    <p>{data.status}</p>
                    <p>{data["ip address"]}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </>
  );
}
