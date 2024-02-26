import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card
            id={item.id}
            category={item.category.name}
            image={item.images[0]}
            name={item.title}
            price={item.price}
            description={item.description}
            key={item.id}
          />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
