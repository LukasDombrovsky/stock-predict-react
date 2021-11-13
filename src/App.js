import React, { useState, useEffect } from "react";
import NavigationBar from "./components/UI/NavigationBar";
import Home from "./components/sections/Home";
import Section from "./components/UI/Section";
import About from "./components/sections/About";
import Indicators from "./components/sections/Indicators";
import Algorithms from "./components/sections/algorithms/Algorithms";
import Optimalization from "./components/sections/Optimalization";
import Predictions from "./components/sections/Predictions";
import useHttp from "./components/hooks/use-http";

import "./App.scss";
import navBrand from "../src/img/navbar-brand.png";
import Footer from "./components/sections/Footer";

function App() {
  const [data, setData] = useState();
  const { isLoading, error, sendRequest: getData } = useHttp();

  useEffect(() => {
    const transformData = (dataObj) => {
      setData(dataObj);
    };

    getData(
      {
        url: "https://stock-predict-b6b9d-default-rtdb.firebaseio.com/data.json",
      },
      transformData
    );
  }, [getData]);

  return (
    <>
      <NavigationBar
        brand={navBrand}
        homeLink="root"
        links={[
          "about",
          "indicators",
          "algorithms",
          "optimalization",
          "predictions",
          "contact",
        ]}
        expand="lg"
        fluid
        colors={{
          notScrolled: {
            backgroundColor: "black",
            textColor: "rgba(255, 255, 255, 0.7)",
            borderBottom: "1px solid rgba(231, 121, 121, 0.3)",
          },
          scrolled: {
            backgroundColor: "white",
            textColor: "#222222",
            borderBottom: "2px solid #d91616",
          },
        }}
        activeTextColor="#d91616"
      />
      <Home id="home" />
      <Section id="about" backgroundColor="#d91616" mid-width>
        <About />
      </Section>
      <Section id="indicators">
        <Indicators />
      </Section>
      <Section id="algorithms" fluid>
        <Algorithms />
      </Section>
      <Section id="optimalization" backgroundColor="#222222">
        <Optimalization
          data={data}
          isLoading={isLoading}
          error={error}
          getData={getData}
        />
      </Section>
      <Section id="predictions" narrow-width>
        <Predictions
          data={data}
          isLoading={isLoading}
          error={error}
          getData={getData}
        />
      </Section>
      <Section id="contact" backgroundColor="#222222" narrow-width>
        <Footer />
      </Section>
    </>
  );
}

export default App;
