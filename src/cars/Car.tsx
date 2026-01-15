import { useState } from "react";

const Car = ({ car }) => {
  const [first, setfirst] = useState(second);
  return (
    <>
      <tr key={car.id}>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
      </tr>
    </>
  );
};

export default Car;
