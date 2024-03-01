import { NavLink } from "react-router-dom";
import { ShopCartContext } from "../../Context";
import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
  const activeStyle = "underline underline-offset-4";

  const { cartProducts, setSearchCategory } = useContext(ShopCartContext);

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">SantaShop</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => setSearchCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ropa"
            onClick={() => setSearchCategory('clothes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronica"
            onClick={() => setSearchCategory('electronica')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronica
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/muebles"
            onClick={() => setSearchCategory('muebles')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Muebles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/juguetes"
            onClick={() => setSearchCategory('juguetes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Juguetes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/otros"
            onClick={() => setSearchCategory('otros')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Otros
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">diiegor98@gmail.com</li>
        <li>
          <NavLink to="/mis-ordenes">Mis ordenes</NavLink>
        </li>
        <li>
          <NavLink to="/mi-cuenta">Mi cuenta</NavLink>
        </li>
        <li>
          <NavLink to="/iniciar-sesion">Iniciar sesión</NavLink>
        </li>
        <li className="flex gap-2 justify-center items-center">
          <FiShoppingCart></FiShoppingCart>
          {cartProducts.length}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
