import { Outlet } from "react-router-dom";
import Banner from "components/Banner";

export default function Layout() {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  )
}
