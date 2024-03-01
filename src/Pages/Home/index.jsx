import { useContext } from "react";
import { ShopCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

const Home = () => {
  const { items, searchTitle, setSearchTitle, filteredItems } =
    useContext(ShopCartContext);

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return filteredItems?.map((item) => (
        <Card
          id={item.id}
          category={item.category.name}
          image={item.images[0]}
          name={item.title}
          price={item.price}
          description={item.description}
          key={item.id}
        />
      ));
    } else {
      return <p>No se encontraron productos</p>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Home</h1>
      </div>
      <input
        type="text"
        placeholder="Buscar producto"
        className="rounded-lg border border-black w-80 p-4 mb-4"
        onChange={(event) => setSearchTitle(event.target.value)}
      />
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
