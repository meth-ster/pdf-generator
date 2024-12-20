import { useEffect, useState } from "react";
import './style/App.css';
import PDFContent from "./components/PDFContent";

function App() {
  const [data, setData] = useState<any>(null);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      "https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <PDFContent data={data} show={show} setShow={setShow} />
      <div
        className="print-button"
        onClick={() => {
          setShow(!show);
        }}
      >
        <div className="print-button-content">
          <img src="./printer.png" width="24px" height="24px" alt="printer"/>
          <p className="print-button-text">Print</p>
        </div>
      </div>
    </div>
  );
}

export default App;
