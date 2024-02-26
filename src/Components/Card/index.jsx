import { useContext } from "react";
import { ShopCartContext } from "../../Context";
import { FaCartPlus } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";

const Card = ({ id, category, image, name, price, description }) => {
  const {
    count,
    setCount,
    openDetailAside,
    setProductAside,
    cartProducts,
    setCartProducts,
    openCartProductsAside,
  } = useContext(ShopCartContext);

  const showProduct = ({ category, image, name, price, description }) => {
    openDetailAside();
    setProductAside({ category, image, name, price, description });
  };

  const addProductsToCart = ({ category, image, name, price }) => {
    setCount(count + 1);
    setCartProducts([...cartProducts, { id, category, image, name, price }]);
    openCartProductsAside();
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <BsCartCheckFill className="absolute top-0 right-0 text-3xl text-white bg-slate-800 p-1 rounded-bl-lg"></BsCartCheckFill>
      );
    } else {
      return (
        <FaCartPlus
          className="absolute top-0 right-0 text-3xl text-white bg-slate-800 p-1 rounded-bl-lg"
          onClick={() => addProductsToCart({ id, category, image, name, price })}
        ></FaCartPlus>
      );
    }
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt={name}
            onClick={() => {
              showProduct({ id, category, image, name, price, description });
            }}
          ></img>
          {renderIcon(id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{name}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};

export default Card;
