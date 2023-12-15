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
  const meals = FoodItemData.map((item) => (
    <FoodItem
      key={item.id}
      id={item.id}
      food={item.food}
      discription={item.discription}
      price={item.price}
    />
  ));

  return <Fragment>{meals}</Fragment>;
};

export default Items;
