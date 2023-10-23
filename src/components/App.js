import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "../styles/style.css"

import Header from "./sections/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Pokemon from "./pages/Pokemon";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => (
  <BrowserRouter>
    <ToastContainer/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
      <Route path="/pokemon/:pokemon" element={<Pokemon/>}></Route>
      <Route
        path="*"
        element={<Home/>}
      />
    </Routes>
  </BrowserRouter>
)

export default App;
