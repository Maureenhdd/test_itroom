import { useEffect, useState } from "react";
import "./App.scss";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [data, setData] = useState();
  const [inputValue, setInputValue] = useState();
  const [resultData, setResultData] = useState();
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch(function (error) {
        console.log(
          "Il y a eu un problème avec l'opération fetch: " + error.message
        );
        throw error;
      });
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    fetch(`https://restcountries.com/v3.1/lang/${inputValue} `)
      .then((res) => res.json())
      .then((result) => setResultData(result))
      .catch(function (error) {
        console.log(
          "Il y a eu un problème avec l'opération fetch: " + error.message
        );
        throw error;
      });
  };


  return (
    <>
      <Nav />
      <h1 className="title">Ma super page de recherche</h1>
      <SearchBar
        value={inputValue}
        onChange={handleChange}
        onClick={handleClick}
      />
      <section className="cards">
        {!resultData || !inputValue
          ? data?.map((country, i) => {
              return (
                <Cards
                  key={i}
                  flag={country.flags.png}
                  continent={country.continents}
                  country={country.altSpellings[1]}
                  link={country.maps.googleMaps}
                />
              );
            })
          : resultData?.map((country, i) => {
              return (
                <Cards
                  key={i}
                  flag={country.flags.png}
                  continent={country.continents}
                  country={country.altSpellings[1]}
                  link={country.maps.googleMaps}
                />
              );
            })}
      </section>
    </>
  );
}

export default App;
