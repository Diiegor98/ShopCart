import { useContext } from "react";
import "./checkoutsidemenu.css";
import { IoCloseCircle } from "react-icons/io5";
import { ShopCartContext } from "../../Context";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
  const {
    cartProductsAsideOpen,
    closeCartProductsAside,
    cartProducts,
    setCartProducts,
  } = useContext(ShopCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
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
      <div className="px-6 ">
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
    </aside>
  );
};

export default CheckoutSideMenu;
