import Header from "./Components/Header";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./Components/Content";
import { useState } from "react";

function App() {
  const [weatherData, setData] = useState([]);

  const getData = async () => {
    const data = await fetch(
      "https://geolocation-db.com/json/ef6c41a0-9d3c-11eb-8f3b-e1f5536499e7"
    );
    const finalData = await data.json();
    const city = finalData.city;

    try {
      const res = await fetch("https://weatherapp-circleci-backend.herokuapp.com/weather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ city }),
      });
      const data = await res.json();
      console.log(data.city + "Hello");
      setData(data);
    } catch (e) {
      return e;
    }
  };

  return (
    <div className="App ">
      <Header />
      <Container>
        <h1 className="m-3 text-light">Welcome !</h1>
        <Button className="m-3 ms-4 bg-info text-dark" onClick={getData}>
          Get Weather
        </Button>
        <Content data={weatherData} />
      </Container>
    </div>
  );
}

export default App;
