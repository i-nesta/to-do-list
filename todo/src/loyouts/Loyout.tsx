import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"

export const Loyout = () => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}