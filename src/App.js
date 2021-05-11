// CSS
import "./res/css/Style.css";
// Components
import FooterComponent from "./res/components/FooterComponent";
// Image
import TopSectionImage from "./res/images/TopSectionImage.jpg";

function App() {
  return (
    <>
      <div className="container-fluid">
        <section className="top-section">
          <div className="row">
            <div className="col">
              <p className="badge text-wrap">Get Well Soon, Earth!</p>
              <h1 className="fw-bold mt-3">Let's Help</h1>
              <h1 className="fw-bold">Recover The Earth,</h1>
              <h1 className="fw-bold mb-3" style={{ color: "#f8c45a" }}>
                Starts From Us!
              </h1>
              <p className="text-muted text-break mb-5">
                The outbreak of the coronavirus issue or called covid-19 makes
                the Earth grieve.
              </p>
              <button type="button" class="btn-primary rounded">
                Learn More
              </button>
              <button type="button" class="btn-secondary rounded">
                Watch Video
              </button>
            </div>
            <div className="col">2 of 2</div>
          </div>
        </section>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
