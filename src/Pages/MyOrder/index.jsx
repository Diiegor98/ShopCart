import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShopCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { LuArrowLeftFromLine } from "react-icons/lu";

const MyOrder = () => {
  const { order } = useContext(ShopCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if(index === 'last'){
    index = order?.length -1
  }
  

  return (
    <Layout>
      <div className="flex items-center gap-2">
        <Link to="/mis-ordenes">
          <LuArrowLeftFromLine className="h-6 w-6 text-black cursor pointer" />
        </Link>
        <h1>Mi orden</h1>
      </div>
      <div className="flex flex-col w-80">
        {order?.[index]?.products.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrder;
