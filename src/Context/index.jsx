import { createContext, useState, useEffect } from "react";

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

  //Checkout My Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);

  // Search By Title
  const [searchTitle, setSearchTitle] = useState(null);

  // Search By Category
  const [searchCategory, setSearchCategory] = useState(null);

  //Filtered Items
  const [filteredItems, setFilteredItems] = useState(null);
  console.log(filteredItems);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchTitle, searchCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchCategory).filter((item) =>
        item.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchTitle && searchCategory)
      setFilteredItems(
        filterBy("BY_TITLE_AND_CATEGORY", items, searchTitle, searchCategory)
      );
    if (searchTitle && !searchCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchTitle, searchCategory)
      );
    if (!searchTitle && searchCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchTitle, searchCategory)
      );
    if (!searchTitle && !searchCategory)
      setFilteredItems(filterBy(null, items, searchTitle, searchCategory));
  }, [items, searchTitle, searchCategory]);

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
        closeCartProductsAside,
        order,
        setOrder,
        items,
        setItems,
        searchTitle,
        setSearchTitle,
        filteredItems,
        setFilteredItems,
        searchCategory,
        setSearchCategory,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};

export { ShopCartContext, ShopCartProvider };
