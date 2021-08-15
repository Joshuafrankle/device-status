import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import Img from "../assets/images/server.png";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://opencloud-dev.herokuapp.com/")
      .then((res) => {
        console.log(res.data["device status"]);
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
          <section>
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img src={Img} alt="image" />
                  <div className="">
                    <p> Hostname:</p>
                    <p> Status:</p>
                    <p> Address:</p>
                  </div>
                  <div className="" style={{ marginRight: "auto" }}>
                    <p>Hello World</p>
                    <p>ONLINE</p>
                    <p>192.168.0.24</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
