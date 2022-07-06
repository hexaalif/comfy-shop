import './App.css';
import QNA from './components/QNA/QNA';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div className="App">
      <h1 className='text-info text-center m-3'>Comfy Shop</h1>
      <Shop></Shop>
      <QNA></QNA>
    </div>
  );
}

export default App;
