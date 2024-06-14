import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
