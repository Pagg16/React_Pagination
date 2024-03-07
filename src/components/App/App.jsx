import React, { useEffect, useState } from "react";
import style from "./app.module.css";
import axios from "axios";
import Сountry from "../Сountry/Сountry";
import VisiblePanel from "../VisiblePanel/VisiblePanel";

const BASE_URL = "https://restcountries.com/v3.1/all";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countriesVisible] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL).then(({ data }) => {
      setCountries(data);
    });
  }, []);

  return (
    <div className={style.app}>
      Countries
      {countries &&
        countries
          .slice(
            currentPage * countriesVisible,
            currentPage * countriesVisible + countriesVisible
          )
          .map((country) => (
            <Сountry
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.png}
              altFlag={country.flags.svg}
            />
          ))}
      {countries && (
        <VisiblePanel
          countries={countries}
          countriesVisible={countriesVisible}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default App;
