import ItemCard from "../ItemCard/ItemCard";
import Weather from "../Weather/Weather";

function Main({temperature, clothes}) {
  return (
    <main>
        <Weather day={true} type='sunny' temperature={temperature}></Weather>
        <section className='card-items'>
          <p className='card-items__message'>Today is {temperature}&#176;F / You may want to wear:</p>
          <ul className='card-items__list'>
            {clothes.map((item) => (
              <li className='item' key={item._id}>
                <ItemCard link={item.link} name={item.name}></ItemCard>
              </li>
            ))}
          </ul>
        </section>
    </main>
  );
}

export default Main;