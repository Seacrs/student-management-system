import { RouterProvider } from "react-router";
import { router } from "./routes/index";
// localStorage.clear();

function App(){
  return <RouterProvider router={router} />
}

export default App;