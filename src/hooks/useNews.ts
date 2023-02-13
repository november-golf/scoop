import {useEffect, useState} from 'react';


export const useNews = (submitSearch: string) => {
    const [scoop, setScoop] = useState([
    { title: "Feeling curious?", description: "Search above and get some news!", name: "text" },
  ]);


useEffect(() => {
  async function getNews() {
    const apikey = process.env.REACT_APP_API_KEY;
    const url = 'https://gnews.io/api/v4/search?q='+ submitSearch + '&apikey=' + apikey + '&lang=en&country=us&max=10'
    const response = await fetch(url);
    const data = await response.json();
    setScoop(data.articles);
  
  }
  if (submitSearch) getNews();
}, [submitSearch]);

    return scoop;
}

     

