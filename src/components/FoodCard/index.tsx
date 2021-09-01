import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Container, ImageDiv, Content, Footer } from './styles';
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import { FoodContext } from '../../context/FoodContext';
import { ModalEditFood } from '../ModalEditFood';



interface FoodProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
}

export default function FoodCard({ image, price, description, id, name,  handleDelete , handleEdit}: FoodProps) {
const router = useHistory();
const {editModalOpen} = useContext(FoodContext);
  
  return (
    
    <Container >
      <ImageDiv onClick={() => router.push(`/${id}`)}>
        <img src={image} width="340px" height="192px" alt={name} />
      </ImageDiv>
      <Content onClick={() => router.push(`/${id}`)}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="price">
          R$ <b>{price}</b>
        </p>
      </Content>
      <Footer>
        <div className="icon-container">
        <button
            type="button"
            className="icon"    
            onClick={() => handleEdit(id)}
          >
            <FiEdit3 size={20} />
          </button>
          {editModalOpen?
          
          <ModalEditFood foodDescription={description} foodIimage={image} foodName={name} foodPrice={price} id={id} key={id}/>
          :
          null
          }
          <button
            type="button"
            className="icon"    
            onClick={() => handleDelete(id)}
            
          >
            <FiTrash size={20} />
          </button>
        </div>
      </Footer>
    </Container>
  );
}