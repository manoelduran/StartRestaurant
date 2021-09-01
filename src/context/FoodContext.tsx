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
  editModalOpen: boolean;
  setEditModalOpen: (editModalOpen: boolean) => void;
  setIsModalVisible: (isModalVisible: boolean) => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleEditModalOpen: () => void;
  handleEditModalClose: () => void;
};

export const FoodContext = React.createContext<IFoodContext>({} as IFoodContext);

export function FoodProvider({ children }: FoodProviderProps) {
  const [foods, setFoods] = useState<IFood[]>(JSON.parse(localStorage.getItem('foods')!) ?? []);
  const [updatedFood, setUpdatedFood] = useState<IFood>({} as IFood)
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  function handleOpenModal() {
    setIsModalVisible(true)
  }
  function handleCloseModal() {
    setIsModalVisible(false)
  }

  function handleEditModalOpen() {
    setEditModalOpen(true)
  }
  function handleEditModalClose() {
    setEditModalOpen(false)
  }

  return (
    <FoodContext.Provider value={{ foods, setFoods, isModalVisible, setIsModalVisible, handleOpenModal, handleCloseModal, handleEditModalOpen, handleEditModalClose , editModalOpen, setEditModalOpen}}>
      {children}
    </FoodContext.Provider>
  );
}