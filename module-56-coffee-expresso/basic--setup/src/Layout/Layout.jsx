import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";
const Layout = () => {
  const loadedCoffee = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffee);
  console.log(coffees);
  return (
    <div className=" m-20">
      <h1 className=" text-2xl text-center text-error">Hot Hot CoffEE</h1>
      <div className=" grid grid-cols-2 gap-5 my-10 ">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Layout;
