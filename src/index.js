import React from 'react';
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Learn from './components/Learn';
import Practice from './components/Practice';
import Compete from './components/Compete';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/learn",
    element: <Learn />,
  },
  {
    path: "/practice",
    element: <Practice />,
  },
  {
    path: "/compete",
    element: <Compete />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
