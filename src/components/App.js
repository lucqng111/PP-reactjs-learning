import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "../styles/style.css"

import Header from "./sections/Header";
import Home from "./sections/Home";
import Search from "./pokemons/Search";
import Pokemon from "./pokemons/Pokemon";
import PokemonCreationForm from "./pokemons/PokemonCreationForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => (
  <BrowserRouter>
    <ToastContainer/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
      <Route path="/create" element={<PokemonCreationForm/>}></Route>
      <Route path="/pokemon/:pokemon" element={<Pokemon/>}></Route>
      <Route
        path="*"
        element={<Home/>}
      />
    </Routes>
  </BrowserRouter>
)

export default App;
