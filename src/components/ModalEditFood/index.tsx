import { useContext } from 'react';
import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import { FoodContext } from '../../context/FoodContext';
import { Container, ModalDiv, ModalContent } from './styles'
interface IFood {
    id: string;
    foodName: string;
    foodDescription: string;
    foodPrice: number;
    foodIimage: string;
}

export function ModalEditFood({ id, foodName, foodDescription, foodIimage, foodPrice }: IFood) {
    const [name, setName] = useState(foodName);
    const [price, setPrice] = useState(foodPrice);
    const [description, setDescription] = useState(foodDescription);
    const [image, setImage] = useState(foodIimage);
    const { handleEditModalClose, foods, setFoods } = useContext(FoodContext)
    async function handleUpdated(event: FormEvent) {
        event.preventDefault()

        const newFoods = foods.map((food) => food.id === id ? {
            id: String(new Date()),
            foodName: name,
            foodPrice: price,
            foodDescription: description,
            foodIimage: image
        } : food );

        setFoods(newFoods);

        localStorage.setItem('foods', JSON.stringify(newFoods))

        handleEditModalClose()
    }



    return (
        <Container>
            <ModalDiv>
                <button onClick={handleEditModalClose}>Close</button>
            </ModalDiv>
            <ModalContent>
                <h2>Editar Prato</h2>
                <input value={image} onChange={event => setImage(event.target.value)} placeholder="Url da Imagem" />
                <input value={name} onChange={event => setName(event.target.value)} placeholder="Nome" />
                <input value={description} onChange={event => setDescription(event.target.value)} placeholder="Descrição" />
                <input value={price} onChange={event => setPrice(Number(event.target.value))} placeholder="Valor" />
                <button type="submit" onClick={handleUpdated}>Editar</button>
            </ModalContent>
        </Container>
    );
}