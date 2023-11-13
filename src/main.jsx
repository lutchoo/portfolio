import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Nav } from './components/Nav'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App';
import { About } from './pages/About';
import { Portefolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/portfolio",
    element: <Portefolio/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
