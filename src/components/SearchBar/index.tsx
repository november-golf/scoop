import React from 'react'

interface Props {
  value: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEnter: (event: React.KeyboardEvent) => void;
}

export default function SearchBar({value, handleClick, handleChange, handleEnter}:Props) {
  return (
    
      <div className="flex space-x-1">
          <input
              type="text"
              className="flex justify-center w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
              onChange={handleChange}
              onKeyDown={handleEnter}
              value={value}

          />
          <button className="px-4 text-white bg-purple-600 rounded-full " onClick={handleClick}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
              </svg>
          </button>
      </div>

    
  )
}
