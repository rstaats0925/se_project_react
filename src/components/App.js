import './App.css';
import Header from './Header/Header.js';
import Weather from './Weather/Weather.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Weather day={true} type='sunny'></Weather>
        <section className='Cards'>Cards</section>
      </main>
    </div>
  );
}

export default App;
