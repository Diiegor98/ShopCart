import { FaAngleRight } from "react-icons/fa";

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <div className="flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-4">
      <div className="flex justify-between w-full items-center">
        <p className="flex flex-col">
          <span>01.02.23</span>
          <span className="font-light">{totalProducts} aritículos</span>
        </p>
        <p className="flex items-center gap-3">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <FaAngleRight className="w-5 h-5" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
