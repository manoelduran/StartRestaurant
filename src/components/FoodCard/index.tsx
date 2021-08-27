import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Container, ImageDiv, Content, Footer } from './styles';



interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  handleDelete: (id: number) => void;
}

export default function FoodCard({ image, price, description, id, name,  handleDelete }: FoodProps) {

  return (
    <Container >
      <ImageDiv>
        <img src={image} alt={name} />
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
            onClick={() => handleDelete(id)}
            
          >
            <FiTrash size={20} />
          </button>
        </div>
      </Footer>
    </Container>
  );
}