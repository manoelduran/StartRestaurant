import { useContext } from 'react';
import { FormEvent, useState } from 'react';
import { FoodContext } from '../../context/FoodContext';
import { Container, ModalDiv, ModalContent } from './styles'

export function Modal() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const { handleCloseModal, foods } = useContext(FoodContext)

    async function handleAddNewDishe(event: FormEvent) {
        event.preventDefault()

        foods.push({
            id: String(new Date()),
            foodName: name,
            foodPrice: price,
            foodDescription: description,
            foodIimage: image
        });

        localStorage.setItem('foods', JSON.stringify(foods));

        handleCloseModal()
    }



    return (
        <Container>
            <ModalDiv>
                <button onClick={handleCloseModal}>Close</button>
            </ModalDiv>
            <ModalContent>
                <h2>Cadastrar Prato</h2>
                <input value={image} onChange={event => setImage(event.target.value)} placeholder="Url da Imagem" />
                <input value={name} onChange={event => setName(event.target.value)} placeholder="Nome" />
                <input value={description} onChange={event => setDescription(event.target.value)} placeholder="Descrição" />
                <input value={price} onChange={event => setPrice(Number(event.target.value))} placeholder="Valor" />
                <button type="submit" onClick={handleAddNewDishe}>Cadastrar</button>
            </ModalContent>
        </Container>
    );
}