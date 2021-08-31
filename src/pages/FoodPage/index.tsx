import { useEffect } from "react";
import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";
import { Container, HeaderDiv, BannerDiv, ContentDiv } from './styles';

interface IFood {
  id: string;
  foodName: string;
  foodDescription: string;
  foodPrice: number;
  foodIimage: string;
}

export function FoodPage() {
  const history = useHistory();
  const { foods } = useContext(FoodContext)
  const { id } = useParams<{ id: string }>();
  const selectedFood = foods.find((food: IFood) => food.id === id);
  useEffect(() => {
    if (!selectedFood) {
      history.push("/")
    }
  }, [history, selectedFood])
  return (
    <Container>
      <HeaderDiv>

          <h1>{selectedFood?.foodName}</h1>


          <button onClick={() => history.push("/")}>
            Voltar
          </button>

      </HeaderDiv>
      <BannerDiv>
        <img width="500px" height="300px" src={selectedFood?.foodIimage} />
      </BannerDiv>
      <ContentDiv>
        <p>{selectedFood?.foodDescription}</p>
        <span>R$ {selectedFood?.foodPrice}</span>
      </ContentDiv>
    </Container>
  )
}