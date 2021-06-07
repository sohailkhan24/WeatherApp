import Header from "./Components/Header";
import { Container, Button, Row, Col, Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./Components/Content";

import { useState } from "react";
import Main from "./Components/Main";

function App() {
  // const [weatherData, setData] = useState([]);

  // const getData = async () => {
  //   const data = await fetch(
  //     "https://geolocation-db.com/json/ef6c41a0-9d3c-11eb-8f3b-e1f5536499e7"
  //   );
  //   const finalData = await data.json();
  //   const city = finalData.city;

  //   try {
  //     const res = await fetch(
  //       "https://weatherapp-circleci-backend.herokuapp.com/weather",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json;charset=utf-8",
  //         },
  //         body: JSON.stringify({ city }),
  //       }
  //     );
  //     const data = await res.json();

  //     setData(data);
  //   } catch (e) {
  //     return e;
  //   }
  // };

  return (
    <div className="App ">
      <Main />
    </div>
  );
}

export default App;
