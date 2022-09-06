import './SASS/style.sass'
import Home from './Pages/HomePage/Home'
import loadable from '@loadable/component'
import MainLayout from './layouts/MainLayout';
import FullScreenLayout from './layouts/FullScreenLayout';
import { Routes, Route } from "react-router-dom";

const Catalog = loadable(() => import('./Pages/CatalogPage/Catalog'))
const Cart = loadable(() => import('./Pages/CartPage'))
const Case = loadable(() => import('./Pages/CasePage'))
const NotFound = loadable(() => import('./Pages/NotFound'))
const Game = loadable(() => import('./Pages/GamePage'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/catalog/game/:id' element={<Game />}/>
        <Route path='/case/:id' element={<Case />}/>
      </Route>
      <Route path='*' element={<FullScreenLayout />}>
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
  );
}

export default App;
