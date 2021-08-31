import React, { ReactNode, useState } from "react";

interface FoodProviderProps {
  children: ReactNode;
};
interface IFood {
    id: string;
    foodName: string;
    foodDescription: string;
    foodPrice: number;
    foodIimage: string;
  }
interface IFoodContext {
  foods: IFood[];
  setFoods: (foods: IFood[]) => void;
isModalVisible: boolean;
setIsModalVisible: (isModalVisible: boolean) => void;
handleOpenModal: () => void;
handleCloseModal: () => void;
};

export const FoodContext = React.createContext<IFoodContext>({} as IFoodContext);

export function FoodProvider({ children }: FoodProviderProps) {
    const [foods, setFoods] = useState<IFood[]>(JSON.parse(localStorage.getItem('foods')!) ?? []);
    const [editingFood, setEditingFood] = useState<IFood>({} as IFood);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
  function handleOpenModal() {
    setIsModalVisible(true)
  }
  function handleCloseModal(){
      setIsModalVisible(false)
  }
  function handleEditFood(){
    setEditModalOpen(true)
    setEditingFood(editingFood)
  }

  return (
    <FoodContext.Provider value={{ foods, setFoods, isModalVisible, setIsModalVisible, handleOpenModal , handleCloseModal}}>
      {children}
    </FoodContext.Provider>
  );
}