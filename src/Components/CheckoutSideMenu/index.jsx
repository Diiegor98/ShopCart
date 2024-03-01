import { useContext } from "react";
import "./checkoutsidemenu.css";
import { IoCloseCircle } from "react-icons/io5";
import { ShopCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils/index";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
  const {
    cartProductsAsideOpen,
    closeCartProductsAside,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setSearchTitle
  } = useContext(ShopCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setSearchTitle(null)
  };

  return (
    <aside
      className={`${
        cartProductsAsideOpen ? "flex" : "hidden"
      } checkout-menu flex-col fixed right-0 border border-black rounded-lg bg-white overflow-y-auto`}
    >
      <div className="flex justify-between items-center p-3">
        <h2 className="font-medium text-xl">Mi Orden</h2>
        <IoCloseCircle
          className="text-red-600 text-2xl cursor-pointer"
          onClick={() => closeCartProductsAside()}
        />
      </div>
      <div className="px-6 flex-1 overflow-y-scroll">
        {cartProducts.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total: </span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="/mis-ordenes/last">
          <button
            className="w-full bg-black py-3 my-3 text-white rounded-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
