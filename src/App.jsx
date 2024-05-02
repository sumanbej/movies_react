import { useState , useEffect} from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector , useDispatch } from 'react-redux'
import { getApiConfiguration , getGenres } from './store/homeSlice'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";


function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home)

  useEffect(() =>{
    apiTest()
  },[])
  const apiTest = () => {
    fetchDataFromApi('/movie/popular').
    then((res) =>{
      console.log(res);
      dispatch(getApiConfiguration(res));

    })
   
  }


  return (
    <>
     <h1>This is a movie project</h1> 
     <div>{url?.total_pages}</div>
    </>
  )
}

export default App