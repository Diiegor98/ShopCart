import { createContext, useState } from "react";

const ShopCartContext = createContext();

const ShopCartProvider = ({ children }) => {
  //Contador de items en el carro
  const [count, setCount] = useState(0);

  //Aside de detalles
  const [detailAside, setDetailAside] = useState(false);
  const openDetailAside = () => setDetailAside(true);
  const closeDetailAside = () => setDetailAside(false);

  //Aside Product Detail
  const [productAside, setProductAside] = useState({});

  //Carrito de compras
  const [cartProducts, setCartProducts] = useState([]);

  //Aside Carrito de compras
  const [cartProductsAsideOpen, setCartProductsAsideOpen] = useState(false);
  const openCartProductsAside = () => setCartProductsAsideOpen(true);
  const closeCartProductsAside = () => setCartProductsAsideOpen(false);
  
  return (
    <ShopCartContext.Provider
      value={{
        count,
        setCount,
        detailAside,
        openDetailAside,
        closeDetailAside,
        productAside,
        setProductAside,
        cartProducts,
        setCartProducts,
        cartProductsAsideOpen,
        openCartProductsAside,
        closeCartProductsAside
      }}
    >
      {children}
    </ShopCartContext.Provider>
  )
};

export {ShopCartContext, ShopCartProvider};
