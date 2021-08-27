import { FormEvent, ReactNode, useState } from 'react';
import { Container, ModalDiv, ModalContent } from './styles'


interface ModalProps {
    onClose: () => void;
    children: ReactNode;
}
export function Modal({ onClose}: ModalProps) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    

    async function handleAddNewDishe(event: FormEvent){
        event.preventDefault()
        let object = JSON.parse(localStorage.getItem('foods')!)  ?? {foods: []};
        object.foods.push({
            id:new Date(),
            foodName: name,
            foodPrice: price,
            foodDescription: description,
            foodIimage: image
        })
        localStorage.setItem('foods', JSON.stringify(object));
      }

    return (
        <Container>
            <ModalDiv>
                <button onClick={onClose}>Close</button>
            </ModalDiv>
            <ModalContent>
                <h2>Cadastrar Prato</h2>
                <input value={image} onChange={event => setImage(event.target.value)} placeholder="Url da Imagem" />
                <input value={name} onChange={event => setName(event.target.value)} placeholder="Nome" />
                <input value={description} onChange={event => setDescription(event.target.value)} placeholder="Descrição" />
                <input  value={price} onChange={event => setPrice(Number(event.target.value))} placeholder="Valor" />
                <button type="submit" onClick={handleAddNewDishe}>Cadastrar</button>
            </ModalContent>
        </Container>
    );
}