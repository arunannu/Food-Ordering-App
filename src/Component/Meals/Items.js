import React, { Fragment } from "react";
import FoodItem from "./Item";

const Items = () => {
  const FoodItemData = [
    { id: "1", food: "Pizza", type: "Pure veges pizza", amount: 121 },
    { id: "2", food: "Munchurion", type: "Pure veges munchurian", amount: 80 },
    { id: "3", food: "Burger", type: "Pure veges burger", amount: 40 },
    { id: "4", food: "Dhosa", type: "Pure veges dhosa", amount: 60 },
    { id: "5", food: "Paneer", type: "Pure veges paneer", amount: 145 },
  ];

//   const meals = FoodItemData.map((item) => {item.food});

  return (
    <Fragment>
      {/* <FoodItem item={meals} /> */}
      <FoodItem food={FoodItemData[0].food} type={FoodItemData[0].type} amount={FoodItemData[0].amount} />
      <FoodItem food={FoodItemData[1].food} type={FoodItemData[1].type} amount={FoodItemData[1].amount} />
      <FoodItem food={FoodItemData[2].food} type={FoodItemData[2].type} amount={FoodItemData[2].amount} />
      <FoodItem food={FoodItemData[3].food} type={FoodItemData[3].type} amount={FoodItemData[3].amount} />
      <FoodItem food={FoodItemData[4].food} type={FoodItemData[4].type} amount={FoodItemData[4].amount} />
    </Fragment>
  );
};

export default Items;
