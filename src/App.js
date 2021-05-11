// CSS
import "./res/css/Style.css";
// Components
import FooterComponent from "./res/components/FooterComponent";
// Image
import TopSectionImage from "./res/images/TopSectionImage.png";

function App() {
  return (
    <>
      <div className="container-fluid">
        <section className="top-section">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <p className="badge text-wrap">Get Well Soon, Earth!</p>
              <h1 className="fw-bold mt-3 top-h1-text">Let's Help</h1>
              <h1 className="fw-bold top-h1-text">Recover The Earth,</h1>
              <h1
                className="fw-bold mb-3 top-h1-text"
                style={{ color: "#f8c45a" }}
              >
                Starts From Us!
              </h1>
              <p className="text-muted text-break mb-5 top-p-text">
                The outbreak of the coronavirus issue or called covid-19 makes
                the Earth grieve.
              </p>
              <button type="button" class="btn-primary rounded mb-5">
                Learn More
              </button>
              <button type="button" class="btn-secondary rounded mb-5">
                Watch Video
              </button>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={TopSectionImage}
                alt="Coronavirus."
                width="80%"
                height="80%"
              ></img>
            </div>
          </div>
        </section>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
