import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShopCartContext } from "../../Context";

const MyOrders = () => {
  const { order } = useContext(ShopCartContext);

  console.log(order)

  return (
    <Layout>
      <div className="flex items-center gap-8 mb-4">
        <h1 className="font-medium text-xl">Mis ordenes</h1>
      </div>
      {order.map((order, index) => (
        <Link key={index} to={`/mis-ordenes/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
};

export default MyOrders;
