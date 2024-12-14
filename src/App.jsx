import { lazy } from "react"


import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import NotFound from "./pages/NotFound"
const AllNews = lazy(()=> import('./components/AllNews'))
const NewsDetails = lazy(()=> import('./components/NewsDetails'))

 
function App () {

  const DynamicRoter = ()=>{
    return(
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <DynamicRoter />,
      children: [
        {
          path: '*',
          element: <NotFound />
        },
        {
          path: '/',
          element: <AllNews />
        },
        {
          path: 'news/:title',
          element: <NewsDetails />
        }
      ]
    }
  ])
  
  return(
    <>
      <RouterProvider router={router} />
    </>
  )

}

export default App