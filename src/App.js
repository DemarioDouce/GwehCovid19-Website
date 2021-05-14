// React Default
import React, { useState, useEffect } from "react";
// CSS
import "./res/css/Style.css";
// Components
import FooterComponent from "./res/components/FooterComponent";
import CardComponent from "./res/components/CardComponent";
import PrimaryButtonComponent from "./res/components/PrimaryButtonComponent";
import SecondaryButtonComponent from "./res/components/SecondaryButtonComponent";
// Image
import TopSectionImage from "./res/images/TopSectionImage.png";
// Packages
import axios from "axios";

function App() {
  //States
  const [activeText, setActiveText] = useState("");
  const [deathsText, setDeathsText] = useState("");
  const [recoveredText, setRecoveredText] = useState("");
  const [dateText, setDateText] = useState("");
  //Use Effect
  useEffect(() => {
    fetchData();
  });

  function fetchData() {
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        // handle success
        setActiveText(response.data.Global.TotalConfirmed);
        setDeathsText(response.data.Global.TotalDeaths);
        setRecoveredText(response.data.Global.TotalRecovered);
        setDateText(response.data.Global.Date);
      })
      .catch((e) => {
        // handle error
      });
  }

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
              <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                target="_blank"
                rel="noreferrer"
              >
                <PrimaryButtonComponent text="Learn More" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=BtN-goy9VOY&ab_channel=JohnsHopkinsMedicineJohnsHopkinsMedicine"
                target="_blank"
                rel="noreferrer"
              >
                <SecondaryButtonComponent text="Watch Video" />
              </a>
            </div>
            <div className="col-lg-6 text-center mb-5">
              <img
                src={TopSectionImage}
                alt="Coronavirus."
                width="80%"
                height="80%"
              ></img>
            </div>
          </div>
        </section>
        <section className="middle-section">
          <p className="text-muted text-break">Date: {dateText}</p>
          <div className="row">
            <div className="col-lg-3 mb-3">
              <CardComponent title="Active" text={activeText} color="#d50000" />
            </div>
            <div className="col-lg-3 mb-3">
              <CardComponent title="Deaths" text={deathsText} color="#f8c45a" />
            </div>
            <div className="col-lg-3 mb-3">
              <CardComponent
                title="Recovered"
                text={recoveredText}
                color="#d50000"
              />
            </div>
          </div>
        </section>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
