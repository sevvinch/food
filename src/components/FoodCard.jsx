import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2"    onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating,  img, qty: 1 })
            );
            handleToast(name);
          }}  >
      <img
        src={img}
        alt=""
        className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-sm text-center p-[25px]">
        <h2>{name}</h2>
        <span className="text-black ">${price}</span>
      </div>
      <p className="text-sm font-normal text-center">{desc.slice(0, 30)}...</p>
    </div>
  );
};

export default FoodCard;
