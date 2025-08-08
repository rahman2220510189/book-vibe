
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import Navber from './NavBer/Navber';
import Main from './Pages/Main';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
  
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
