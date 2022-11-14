import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Pages/Router/Routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
