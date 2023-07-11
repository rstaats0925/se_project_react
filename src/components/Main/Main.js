import ItemCard from "../ItemCard/ItemCard";
import Weather from "../Weather/Weather";
import './Main.css';

function Main({temperature, clothes}) {
  // const appropriateClothing = clothes.filter(clothing => clothing.weather === weather);
  return (
    <main className="Main">
      <Weather day={true} type='sunny' temperature={temperature}></Weather>
      <section className='clothes'>
        <p className='clothes__message'>Today is {temperature}&#176;F / You may want to wear:</p>
        <ul className='clothes__flex-container'>
          {clothes.map(item =>
              <ItemCard name={item.name} link={item.link} key={item._id}/>
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;