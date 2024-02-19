import { createContext, useState } from "react";

const ShopCartContext = createContext();

const ShopCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ShopCartContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};

export {ShopCartContext, ShopCartProvider};
