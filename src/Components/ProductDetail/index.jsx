import { useContext } from "react";
import "./productdetail.css";
import { IoCloseCircle } from "react-icons/io5";
import { ShopCartContext } from "../../Context";

const ProductDetail = () => {
  const { detailAside, closeDetailAside, productAside } =
    useContext(ShopCartContext);

  return (
    <aside
      className={`${
        detailAside ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white overflow-y-auto`}
    >
      <div className="flex justify-between items-center p-3">
        <h2 className="font-medium text-xl">Detail</h2>
        <IoCloseCircle
          className="text-red-600 text-2xl cursor-pointer"
          onClick={() => closeDetailAside()}
        />
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={productAside.image}
          alt={productAside.name}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${productAside.price}</span>
        <span className="font-medium text-md">{productAside.name}</span>
        <span className="font-light text-sm">{productAside.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
