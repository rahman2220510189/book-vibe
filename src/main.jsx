
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import Main from './Pages/Main';
import Home from './Pages/Home/Home';
import BookDetail from './Pages/BookDetail/BookDetail';
import ListedBooks from './Pages/ListedBooks/ListedBooks';
import BookPageChart from './Pages/BookPageChart/BookPageChart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    {
      path:'/',
      element:<Home></Home>,
    },
    {
      path: 'books/:bookId',
      element:<BookDetail></BookDetail>,
    },
    {
      path:'library',
      element:<ListedBooks></ListedBooks>,
    },
    {
      path:'page-to-read',
      element:<BookPageChart></BookPageChart>
    },
   
    
 
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-[1171px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
