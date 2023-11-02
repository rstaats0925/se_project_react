import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import './Main.css';
import React from 'react';
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";


function Main({temperature, clothes, onSelectedCard, onCardLike}) {

  const currentUser = React.useContext(CurrentUserContext);
  const {currentTemperatureUnit} = React.useContext(CurrentTemperatureUnitContext);
  const fahrenheit = temperature.F;

  const weatherType = React.useMemo(() => {
    if (fahrenheit < 50) {
      return "cold";
    } else if (fahrenheit >= 50 && fahrenheit < 70 ) {
      return "warm";
    } else if (fahrenheit >= 70) {
      return "hot";
    }
  }, [fahrenheit]);

  const appropriateClothing = clothes.filter(clothing => {
    return clothing.weather === weatherType;
  });

  const clothingItems = appropriateClothing.map(item => {
    // const isLiked = item.likes.includes(currentUser._id);
    return (
      <li className="clothes__item" key={item._id}>
        <ItemCard item={item} onSelectedCard={onSelectedCard} user={currentUser} onCardLike={onCardLike} />
      </li>
    )
  })

  return (
    <main className="Main">
      <WeatherCard day={true} type='sunny' temperature={temperature}></WeatherCard>
      <section className='clothes'>
        <p className='clothes__message'>Today is {temperature[currentTemperatureUnit]}&#176;{currentTemperatureUnit} / You may want to wear:</p>
        <ul className='clothes__flex-container'>
          {clothingItems}
        </ul>
      </section>
    </main>
  );
}

export default Main;
