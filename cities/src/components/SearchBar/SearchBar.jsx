import React from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  return (
    <section className="search">
      <input
        type="search"
        className="search_input"
        placeholder="Rechercher par langue"
        value={props.value || ""}
        onChange={props.onChange}
      ></input>
      <button className="search_btn" onClick={props.onClick}>
        <FontAwesomeIcon className="search_i" icon={faSearch} />
      </button>
    </section>
  );
};

export default SearchBar;
