import ItemCard from "../ItemCard/ItemCard";
import Weather from "../Weather/Weather";
import './Main.css';
import React from 'react';
// import { weatherType } from "../../utils/Api.js";

/*
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  }
*/

function Main({temperature, clothes, onSelectedCard}) {
  // const appropriateClothing = clothes.filter(clothing => clothing.weather === weather);
  const weatherType = React.useMemo(() => {
    if (temperature < 50) {
      return "cold";
    } else if (temperature >= 50 && temperature < 70 ) {
      return "warm";
    } else if (temperature >= 70) {
      return "hot";
    }
  }, [temperature]);

  const appropriateClothing = clothes.filter(clothing => {
    return clothing.weather === weatherType;
  });

  return (
    <main className="Main">
      <Weather day={true} type='sunny' temperature={temperature}></Weather>
      <section className='clothes'>
        <p className='clothes__message'>Today is {temperature}&#176;F / You may want to wear:</p>
        <ul className='clothes__flex-container'>
          {appropriateClothing.map(item => {
            return (
              <li className="clothes__item" key={item._id}>
                <ItemCard item={item} onSelectedCard={onSelectedCard}/>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;