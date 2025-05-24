
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import MainLayout from "../src/layouts/MainLayout";
import HomePage from "../src/pages/Homepage";
import Check from "../src/pages/check";
import Error from "../src/pages/Error";


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/check" element={<Check/>}/>
        <Route path="*" element={<Error/>}/>
        


      </Route>
    )
  )
  
  return (
    <>


 <RouterProvider router = {router} />

 </>
  )
}

export default App