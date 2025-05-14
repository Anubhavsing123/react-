import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import Header from './components/Header/Header.jsx';
import Footer from './components/footer/Footer.jsx'; // Import Footer
import About from './components/About/About.jsx';   // Import About
import Home from './components/Home/Home.jsx';      // Import Home
import Contact from './components/Contact/Contact.jsx'; // Import Contact
import User from './components/User/User.jsx';
import GitHub, { githubInloader } from './components/GitHub/GitHub.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />, // Home component is now defined
//       },
//       {
//         path: "footer",
//         element: <Footer />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       }
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route Route path='/' element={<App/>}>,
   <Route path='' element={<Home/>}/>,
   <Route path='about' element={<About/>}/>,
   <Route path='contact' element={<Contact/>}/>,
   <Route path='user/:userid' element={<User/>}/>
   <Route 
   loader={githubInloader}
   path='github' 
   element={<GitHub/>}/>
   </Route>

  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
