import Header from '../../components/Header';
import FoodCard from '../../components/FoodCard';
import { FoodsContainer } from './styles';
import { useContext } from 'react';
import { FoodContext } from '../../context/FoodContext';
import { ModalEditFood } from '../../components/ModalEditFood';


interface IFood {
  id: string;
  foodName: string;
  foodDescription: string;
  foodPrice: number;
  foodIimage: string;
}

export default function FoodList({id, foodDescription, foodIimage, foodName, foodPrice}: IFood) {
  
  const {foods, setFoods, handleEditModalOpen, editModalOpen} = useContext(FoodContext)

  function handleDelete(id: string) {
    const filtered = foods.filter((food: IFood) => food.id !== id);

    localStorage.setItem('foods', JSON.stringify(filtered));

    setFoods(filtered);
  }

  function handleEditFood(id: string){

handleEditModalOpen()
    const selectedFood = foods.filter((food : IFood) => food.id === id )
    setFoods(selectedFood)
    localStorage.setItem('foods', JSON.stringify(selectedFood));

  }

  return (
    <>
      <Header />
      <FoodsContainer >
        {foods.map((food: IFood) => (
          <FoodCard key={food.id}
            image={food.foodIimage}
            name={food.foodName}
            id={food.id}
            description={food.foodDescription}
            price={food.foodPrice}
            handleEdit={handleEditFood}
            handleDelete={handleDelete} />
        ))}

      </FoodsContainer>
    </>
  );
}
