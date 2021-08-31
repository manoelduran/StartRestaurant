import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Container, ImageDiv, Content, Footer } from './styles';
import { useHistory } from "react-router-dom";



interface FoodProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  handleDelete: (id: string) => void;
}

export default function FoodCard({ image, price, description, id, name,  handleDelete }: FoodProps) {
const router = useHistory();

  
  return (
    
    <Container onClick={() => router.push(`/${id}`)}>
      <ImageDiv>
        <img src={image} width="340px" height="192px" alt={name} />
      </ImageDiv>
      <Content>
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
            
          >
            <FiEdit3 size={20} />
          </button>
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