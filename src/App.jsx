import Form from './Form'
import Items from './Items';
import { useState, useEffect } from 'react';
import './App.css'
function App() {

  const API_URL = "https://jsonplaceholder.typicode.com/"

  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);


  
  useEffect(() => {

    const fetchItems = async () => {

      const response = await fetch(`${API_URL}${reqType}`);
      const data = await response.json();
      console.log(data);
      setItems(data);
      
    }
    fetchItems();
  }, [reqType]);


  return (
    <div className="header">
      <Form reqType={reqType} setReqType={setReqType} />
      <Items items={ items} />
      
      </div>
  )
}

export default App

