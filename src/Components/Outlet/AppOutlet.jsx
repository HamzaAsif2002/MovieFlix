import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppOutlet = () => {
  const navi = useNavigation();
  if (navi.state === "loading") return <h1>Loading....</h1>;
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
