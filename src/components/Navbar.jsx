
// import 'flowbite'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="border-b-gray-800 border dark:bg-gray-900 fixed z-10 w-full top-0 shadow-lg bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={'/'} className="flex items-center">
          <img src="/logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center sm:text-lg text-sm font-semibold whitespace-nowrap dark:text-white tracking-widest">
            NewsOfWorld
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuVisible}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            menuVisible ? 'block' : 'hidden'
          } w-[100vw] xl:block xl:w-auto`}
          id="navbar-default"
        >
    
      <ul className="font-medium flex flex-col p-4 xl:p-0 mt-4 xl:ml-2 border border-gray-100 rounded-lg bg-gray-200 xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 xl:bg-white dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to={'/'} className="block py-2 pl-3 pr-4 rounded  xl:focus:text-blue-500 focus:text-white focus:bg-blue-700 xl:focus:bg-transparent hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to={'/world'} className="block py-2 pl-3 pr-4 rounded  xl:focus:text-blue-500 focus:text-white focus:bg-blue-700 xl:focus:bg-transparent hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">World</Link>
        </li>
        <li>
          <Link to={'/nation'} className="block py-2 pl-3 pr-4 rounded  xl:focus:text-blue-500 focus:text-white focus:bg-blue-700 xl:focus:bg-transparent hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">Nation</Link>
        </li>
        <li>
          <Link to={'/business'} className="block py-2 pl-3 pr-4 rounded  xl:focus:text-blue-500 focus:text-white focus:bg-blue-700 xl:focus:bg-transparent hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">Business</Link>
        </li>
        <li>
          <Link to={'/technology'} className="block py-2 pl-3 pr-4 rounded  xl:focus:text-blue-500 focus:text-white focus:bg-blue-700 xl:focus:bg-transparent hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">Technology</Link>
        </li>
        <li>
          <Link to={'/entertainment'} className="block py-2 pl-3 pr-4 rounded  xl:focus:text-blue-500 focus:text-white focus:bg-blue-700 xl:focus:bg-transparent hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">Entertainment</Link>
        </li>
        <li>
          <Link to={'/sports'} className="block py-2 pl-3 pr-4 rounded  xl:focus:text-blue-500 focus:text-white focus:bg-blue-700 xl:focus:bg-transparent hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">Sports</Link>
        </li>
        <li>
          <Link to={'/science'} className="block py-2 pl-3 pr-4 rounded   xl:focus:text-blue-500 focus:text-white focus:bg-blue-700 xl:focus:bg-transparent hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">Science</Link>
        </li>
        <li>
          <Link to={'/health'} className="block py-2 pl-3 pr-4 rounded  xl:focus:text-blue-500 focus:text-white focus:bg-blue-700 xl:focus:bg-transparent hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">Health</Link>
        </li>
        <li>
          <Link to={'/worldt'} className="block py-2 pl-3 pr-4 rounded  xl:focus:text-blue-500 focus:text-white focus:bg-blue-700 xl:focus:bg-transparent hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent">About World</Link>
        </li>
      </ul>
  
        </div>
      </div>
    </nav>
  );
}
