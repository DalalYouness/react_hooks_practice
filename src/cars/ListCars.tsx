import React from "react";
import Car from "./Car";

let cars = [
  { id: 1, make: "Toyota", model: "Camry", year: 2020 },
  { id: 2, make: "Honda", model: "Accord", year: 2019 },
  { id: 3, make: "Ford", model: "Mustang", year: 2021 },
];

cars = [];
const ListCars = () => {
  const displayCars = () => {
    return cars.map((car, index) => <Car car={car} key={index} />);
  };
  return (
    <table className="table">
      <thead>
        <th>id</th>
        <th>make</th>
        <th>model</th>
        <th>year</th>
      </thead>
      <tbody>{displayCars()}</tbody>
    </table>
  );
};

export default ListCars;
