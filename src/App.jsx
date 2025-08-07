import { Route , RouterProvider, Routes , createBrowserRouter, createRoutesFromElements ,  } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage"

function App() {

  let routerVar = createBrowserRouter(createRoutesFromElements (
    <>
      <Route element={<Layout/>}>
        <Route index element={<HomePage/>}></Route>
      </Route>
      <Route path="*" element={<ErrorPage/>}></Route>  
    </>
  ))
  return (
    <>
      <RouterProvider router={routerVar}/>
    </>
  )
}

export default App
