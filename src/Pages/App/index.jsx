import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAcount from "../MyAcount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import NavBar from "../../Components/Navbar";
import {ShopCartProvider} from "../../Context";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/mi-cuenta", element: <MyAcount /> },
    { path: "/mi-orden", element: <MyOrder /> },
    { path: "/mis-ordenes", element: <MyOrders /> },
    { path: "/iniciar-sesion", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShopCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShopCartProvider>
  );
};

export default App;
