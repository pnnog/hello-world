import { Outlet } from "react-router-dom";
import Banner from "components/Banner";

export default function Layout({children}) {
  return (
    <>
      <Banner />
      {children}
      <Outlet />

    </>
  )
}
