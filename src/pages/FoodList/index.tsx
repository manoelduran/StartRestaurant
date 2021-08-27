import Header from '../../components/Header';
import FoodCard from '../../components/FoodCard';
import { FoodsContainer } from './styles';
import { useState } from 'react';


interface IFood {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface AddFood {
  image: string;
  name: string;
  price: string;
  description: string;
}

export default function FoodList() {
  const [foods, setFoods] = useState<IFood[]>([])


  function handleDelete(id: number) {
    setFoods(foods => foods.filter(food => food.id !== id));
  }

  return (
    <>
      <Header />

      <FoodsContainer >
        {foods.map((food) => (
          <FoodCard
            image={food.image}
            name={food.name}
            id={food.id}
            description={food.description}
            price={food.price}
            handleDelete={handleDelete} />
        ))}
      </FoodsContainer>
    </>
  );
}
