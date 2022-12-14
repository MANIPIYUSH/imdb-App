
import './App.css';
import NavBar from './components/NavBar';
import Banner from "./components/Banner";
import Movies from "./components/Movies"
import Pagination from "./components/Pagination";
import Favourites from './components/Favourites';
import {BrowseRouter,Routes,Route, BrowserRouter} from "react-router-dom";


function App() {
  return (
          <BrowserRouter>
           <NavBar/>
          <Routes>
                <Route path="/" element={
                  <>
                   <Banner/>
                   <Movies/>
                  {/* { <Pagination/>} */}
                  </>
               
                }/>
           <Route path="/favourites" element = {<Favourites/>}/>
          </Routes>
   
          </BrowserRouter>
  )
}

export default App;
