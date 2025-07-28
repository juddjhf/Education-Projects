import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Notes from "./Pages/Notes"
import Signup from "./Pages/Signup"
import Classes from "./Pages/Classes"

import { AppLayout } from "./components/AppLayout/AppLayout"
import Courses from "./Pages/Courses"

const router =createBrowserRouter([
{
  path:'/',
  element:<AppLayout/>,
  children:[ {
    path:'/',
    element:<Home/>,
  },
  {
    path:'courses',
    element:<Courses/>,
  },
  {
    path:'notes',
    element:<Notes/>,
  },
  {
    path:'signup',
    element:<Signup/>,
  },
  {
    path:'classes',
    element:<Classes/>,
  }
]

}
 
])

const App =()=>{
  return <RouterProvider router={router}>

  </RouterProvider>
}

export  default App