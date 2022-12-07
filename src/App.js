import './App.css';
import image from './grocery.jpg';
import { GroceryList } from './GroceryList';
import imageTwo from './man.jpg';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={image} alt="shopping" width="200px"/>
      </div>
      <h1>Grocery list</h1>
      <GroceryList/>{ /*{ NEW ComPONENT } */}
      <div className='container'>
        <img src={imageTwo} alt="man" width="200px"/>
      </div>
    </div>
  );
}

export default App;
