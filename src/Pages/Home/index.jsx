import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

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
            category={item.category.name}
            image={item.images[0]}
            name={item.title}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
