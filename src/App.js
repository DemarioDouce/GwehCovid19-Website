// CSS
import "./res/css/Style.css";
// Components
import FooterComponent from "./res/components/FooterComponent";

function App() {
  return (
    <>
      <div className="container-fluid">
        <section className="top-section d-flex justify-content-center">
          <h1>Hello World.</h1>
        </section>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
