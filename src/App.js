import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import NoPageFound from './components/NoPageFound';
import Orders from './components/Orders';
import About from './components/About';

function App() {
  return (
    <div className="App text-">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='*' element= {<NoPageFound></NoPageFound>}></Route>
        <Route path='/orders' element= {<Orders></Orders>}></Route>
        <Route path='/about' element= {<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
