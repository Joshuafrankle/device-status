import Tick from "../assets/images/server.png";

export default function Problem() {
  return (
    <>
      <section className="error-main">
        <div>
          <div className="error-card text-center">
            <img className="error-img mb-4" src={Tick} alt="Done" />
            <h3 className="">Uh Oh!</h3>
            <h4 className="mt-4">
              We are dealing with an Internal error. Try again sometime later
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
