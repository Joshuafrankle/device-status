import Warning from "../assets/images/warning.png";

export default function Error404() {
  return (
    <>
      <section className="error-main">
        <div>
          <div className="error-card text-center">
            <img className="error-img mb-4" src={Warning} alt="Done" />
            <h3>Error 404</h3>
            <h4 className="mt-4">The Requested page doesn't exist</h4>
          </div>
        </div>
      </section>
    </>
  );
}
