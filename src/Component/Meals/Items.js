import React, { Fragment } from "react";
import FoodItem from "./Item";

const Items = () => {
  const FoodItemData = [
    { id: "1", food: "Pizza", discription: "Pure veges pizza", price: 121 },
    { id: "2", food: "Munchurion", discription: "Pure veges munchurian", price: 80 },
    { id: "3", food: "Burger", discription: "Pure veges burger", price: 40 },
    { id: "4", food: "Dhosa", discription: "Pure veges dhosa", price: 60 },
    { id: "5", food: "Paneer", discription: "Pure veges paneer", price: 145 },
  ];

//   const meals = FoodItemData.map((item) => {item.food});

  return (
    <Fragment>
      {/* <FoodItem item={meals} /> */}
      <FoodItem food={FoodItemData[0].food} discription={FoodItemData[0].discription} price={FoodItemData[0].price} />
      <FoodItem food={FoodItemData[1].food} discription={FoodItemData[1].discription} price={FoodItemData[1].price} />
      <FoodItem food={FoodItemData[2].food} discription={FoodItemData[2].discription} price={FoodItemData[2].price} />
      <FoodItem food={FoodItemData[3].food} discription={FoodItemData[3].discription} price={FoodItemData[3].price} />
      <FoodItem food={FoodItemData[4].food} discription={FoodItemData[4].discription} price={FoodItemData[4].price} />
    </Fragment>
  );
};

export default Items;
