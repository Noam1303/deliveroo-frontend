import {useState, useEffect} from 'react'

import './assets/css/reset.css'
import './assets/css/style.css'
import Header from './components/header.jsx'
import Content from './components/content.jsx'

import axios from 'axios'


function App() {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("https://site--test-backend--7g4fljlbl5js.code.run/");
    setData(response.data);
    setIsLoading(false);    
  };

  useEffect(() => {
    fetchData();

  }, []);
  

  return (
    <nav>
      {isLoading ? (
          <span>En cours de chargement... </span>
          ) : (
            <>
            <Header data={data.restaurant}></Header>
            <Content categories={data.categories}></Content>
            </>
          )}
    </nav>
  )
}

export default App
