import {useEffect, useState} from 'react';




export const useNews = (searchValue: string) => {
    const [scoop, setScoop] = useState([{title:"Let's Search", description: "Text", name:"text"}]);


useEffect(() => {
  async function getNews() {
    const apikey = process.env.REACT_APP_API_KEY;
    const url = 'https://gnews.io/api/v4/search?q='+ searchValue + '&apikey=' + apikey + '&lang=en&country=us&max=10'
    const response = await fetch(url);
    const data = await response.json();
    setScoop(data.articles);
  
  }
  getNews();
}, [searchValue]);

    return scoop;
}

     

