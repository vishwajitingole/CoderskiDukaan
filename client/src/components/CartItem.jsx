import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartReducer";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item._id));
  };

  return (
    <div className="flex items-center p-4 mb-4 bg-white rounded-md shadow-md">
      <div className="mr-4">
        <input type="checkbox" className="checkbox" />
      </div>
      <div className="flex items-center flex-grow">
        <div className="w-16 h-16 overflow-hidden rounded-full">
          <img
            src={item.image}
            alt="Product Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-4">
          <div className="font-bold">{item.title}</div>
          <div className="text-sm font-medium text-gray-500">
            {item.rating.rate}
          </div>
        </div>
      </div>
      <div className="font-bold">Rs.{item.price}</div>
      <Link to={`/product/${item._id}`} className="ml-4 btn btn-primary">
        Details
      </Link>
      <button onClick={handleRemoveFromCart} className="ml-4 btn btn-primary">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
