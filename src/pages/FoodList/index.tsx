import Header from '../../components/Header';
import FoodCard from '../../components/FoodCard';
import { FoodsContainer } from './styles';
import { useState } from 'react';


interface IFood {
  id: string;
  foodName: string;
  foodDescription: string;
  foodPrice: number;
  foodIimage: string;
}

interface AddFood {
  name: string;
  price: string;
  description: string;
}

export default function FoodList() {
let object = JSON.parse(localStorage.getItem('foods')!);
console.log(object.foods)
  function handleDelete(id: string) {
  }

  return (
    <>
      <Header />

      <FoodsContainer >
        
        {object?.foods.map((food: IFood) => (
          <FoodCard key={food.id}
            image={food.foodIimage}
            name={food.foodName}
            id={food.id}
            description={food.foodDescription}
            price={food.foodPrice}
            handleDelete={handleDelete} />
        ))}
      </FoodsContainer>
    </>
  );
}
