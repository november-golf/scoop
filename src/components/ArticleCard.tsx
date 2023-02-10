import React from 'react'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    title: string;
    content: string;
    description: string;
    url: string;
    source: string;
    date: string;
  }
export default function ArticleCard({title, content, description, url, source, date}: Props) {

  return (
    <div key={uuidv4()}>
        <a href={url} className='text-xl text-indigo-500' target="_blank"
    rel="noopener noreferrer">{title}</a>
        <p className='mt-2'>{description}</p>
        <p className='mb-2'>{content}</p>
       
        <p className='text-xs mb-6'>{date}</p>
    </div>
  )
}

export{}