import React, { useEffect, useState } from "react";
import FoodData from "../data/Data";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 font-bold rounded-lg  hover:text-white ${
            selectedCategory === "All" && " text-white"
          }`}
        >
          Hot Dishes
        </button>
        {categories.map((category, index) => {
          return (
            <div className={` border-b ${selectedCategory === category&&"border-b-[#EA7C69] text-white"} categoryFilter  pb-5`}>

            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2  font-bold rounded-lg hover:border-b-[#EA7C69] text-[#fff]   ${selectedCategory === category&&" text-[#EA7C69]"}`}
              >
              {category}
            </button>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
