import { IoCloseCircle } from "react-icons/io5";

const OrderCard = ({handleDelete, id, name, image, price}) => {

  let renderXIcon

  if(handleDelete){
    renderXIcon = <IoCloseCircle onClick={() => handleDelete(id)} className="text-red-600 text-2xl cursor-pointer" />
  }

  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={image} alt={name} />
        </figure>
        <p className="text-sm font-light">{name}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXIcon}
      </div>
    </div>
  );
};

export default OrderCard;
