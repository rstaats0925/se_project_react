import './App.css';
import Header from './Header/Header.js';
import Weather from './Weather/Weather.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Weather day={true} type='sunny'></Weather>
        <section className='Cards'>
        <p>Today is 75&#176;F / You may want to wear:</p>
        <ul></ul>
        </section>
      </main>
    </div>
  );
}

export default App;
