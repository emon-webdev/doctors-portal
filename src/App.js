import { Toaster } from 'react-hot-toast';
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Pages/Router/Routes";

import "react-day-picker/dist/style.css";

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
