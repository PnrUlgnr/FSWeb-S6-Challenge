import React, {useState,useEffect} from 'react';
import Axios from "axios";
import Header from 
const App = () => {
  const [karakterler,setKarakterler]=useState([]);//karakterler statende tutacağız.
  useEffect(()=>{
let url = "";
axios.get(url)
.then(response=>{
  console.log(response.data)
  setKarakterler(response.data);
}) 
.catch(err=>{
  console.log(err);
})
},[]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Karakter</h1>
    </div>
  );
}

export default App;
