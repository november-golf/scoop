import React from 'react'
import NewsDisplay from '../NewsDisplay'
import SearchBar from '../SearchBar'
import { useState } from 'react'
import { useNews } from '../../hooks/useNews'

export default function App() {

const [searchValue, setSearchValue] = useState("");
const [submitSearch, setSubmitSearch] = useState("");

const scoop = useNews(submitSearch)

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  const value = e.target.value;
  setSearchValue(value);
}

function handleClick(e: React.MouseEvent<HTMLButtonElement>){
  setSubmitSearch(searchValue)
}

const handleEnter = (e: React.KeyboardEvent) =>{
  const target = e.target as HTMLInputElement;
  const value = target.value;
  if (e.code === "Enter"){
    setSubmitSearch(value);
  }
}

// if(scoop){
//   console.log(scoop)
// }

  return (
    <div className="flex items-center flex-col space-y-4 space-x-4 container mx-auto p-4">
      <h1 className="text-slate-600 text-4xl font-bold my-10 text-center">NEWS</h1>
      <SearchBar 
        value={searchValue}
        handleChange={handleChange}
        handleClick={handleClick} 
        handleEnter={handleEnter} />
       {scoop ? (
          <NewsDisplay className="my-100" results={scoop}/>
        ) : (<p>Keep Searching, nothing found.</p>)
  
        }

    </div>
  )
}
