import './App.css';
import Header from './Header/Header.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <section className='Weather'>weather</section>
        <section className='Cards'>Cards</section>
      </main>
    </div>
  );
}

export default App;
