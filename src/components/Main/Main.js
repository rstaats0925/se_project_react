import ItemCard from "../ItemCard/ItemCard";
import Weather from "../Weather/Weather";
import './Main.css';

/*
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  }
*/

function Main({temperature, clothes}) {
  // const appropriateClothing = clothes.filter(clothing => clothing.weather === weather);
  return (
    <main className="Main">
      <Weather day={true} type='sunny' temperature={temperature}></Weather>
      <section className='clothes'>
        <p className='clothes__message'>Today is {temperature}&#176;F / You may want to wear:</p>
        <ul className='clothes__flex-container'>
          {clothes.map(item =>
            <li key={item._id} className="clothes__item" style={{backgroundImage:`url(${item.link})`}}>
              <ItemCard name={item.name}/>
            </li>
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;