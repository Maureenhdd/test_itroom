import React from "react";
import './Cards.scss'
const Cards = (props) => {
  return (
    <div className="card">
      <img src={props.flag} alt={`${props.alt} flag`} className='card_img'></img>
      <p className="card_continent">{props.continent}</p>
      <h3 className="card_country">{props.country}</h3>
      <p className="card_lang_count">Liste des langues parlées : </p>
      <p className="card_lang">{props.langs}</p>

      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="card_btn"
      >
        {" "}
        Voir sur GoogleMap
      </a>
    </div>
  );
};

export default Cards;
