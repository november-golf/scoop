import React from "react";
import ArticleCard from "../ArticleCard";
import {v4 as uuidv4} from 'uuid';

export default function NewsDisplay({results}: any) {
  

  // if(results){console.log(typeof(articles), results[0]["title"])};
  // if (results) {
  //   console.log(results)
  // }

  return (
    <>
      <div className="mt-50px h-full"></div>
    
      {results.length > 0 ? (
        <div className="h-full mt-50">
        {results.map((story: any) => (
          <ArticleCard
            key={uuidv4()}
            title={story["title"]}
            content={story["content"]}
            description={story["description"]}
            url={story["url"]}
            source={story["source"]}
            date={story["publishedAt"]}
          />
        ))}
        </div>
      ) : (
        <p>Get the latest scoop! Type in the search box and click Search!</p>
      )} 
    </>
  );
}
