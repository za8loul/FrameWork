import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './pages/MainLayout/MainLayout'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
function App() {
  
let Routes = createBrowserRouter ([
  { path: "", element: <MainLayout/>, 
    children: [
      {index: true, element: <Home/>},
      {path: "home", element: <Home/>},
      {path: "about", element: <About/>},
      {path: "portfolio", element: <Portfolio/>},
      {path: "contact", element: <Contact/>},
      {path: "*", element: <NotFound/>}
    ]
  },
]);
  return (
    <div className=''>
    <RouterProvider router = {Routes}> </RouterProvider>
    
    </div>
  )
}

export default App
