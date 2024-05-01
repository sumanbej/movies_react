import { useState , useEffect} from 'react'
import { fetchDataFromApi } from './utils/api'


function App() {

  useEffect(() =>{
    apiTest()
  },[])
  const apiTest = () => {
    fetchDataFromApi('/movie/popular').
    then((res) =>{
      console.log(res)

    })
   
  }


  return (
    <>
     <h1>This is a movie project</h1> 
    </>
  )
}

export default App
