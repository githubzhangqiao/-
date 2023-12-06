import Demo from "@/views/demo"
import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home"))
// import Home from "@/views/home"
const Login =React.lazy(() => import("@/views/Login"))
const Register=React.lazy(() => import("@/views/Register"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/entire",
    element: <Entire/>
  },
  {
    path: "/detail",
    element: <Detail/>
  },
  {
    path: "/demo",
    element: <Demo/>
  }
]

export default routes
