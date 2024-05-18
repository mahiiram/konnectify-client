import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UserLogin from "./Component/User/Login.js";
import { useSelector } from "react-redux";
import UserRegister from "./Component/User/Register.js";
import UserProfile from "./Pages/Profile/UserProfile.js";
import { AuthorizeUser } from "./middleware/auth.js";

const router = createBrowserRouter([
  {
    path:"/",
    element:<div><UserLogin /></div>
  },
  {
    path:"/register",
    element:<div><UserRegister/></div>
  },
  {
    path:"/userprofile",
    element:<AuthorizeUser><UserProfile/></AuthorizeUser>
  }
])

function App() {
  const isUserloggedin = useSelector(state => state.user.isLoggedIn);
  console.log("isUserloggedin",isUserloggedin)
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  );
}

export default App;