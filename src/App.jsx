
import { createBrowserRouter } from 'react-router';
import './App.css'
import { RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter([

{
  path: "/",
  element: <Landing/>
},

{
  path:"about",
  element: <Aboutme/>
},
{
  path: "project",
  element: <Projects/>
},
{
  path: "contact",
  element: <Contact/>
},

  ]);

  return  <RouterProvider router={router}/>;
   
}

export default App;
