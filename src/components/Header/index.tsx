import { Container, Content} from './styles';
import Logo from '../../assets/Logo.png';
import { Modal } from '../Modal';
import { useContext } from 'react';
import { FoodContext } from '../../context/FoodContext';



export default function Header() {
  const {isModalVisible,  handleOpenModal} = useContext(FoodContext)
  return (
    <Container>
      <Content>
        <img src={Logo} width="200px" height="200px" alt="dt money"></img>
        <button className="HeaderButton" type="button" onClick={handleOpenModal}>Novo Prato</button>
          {isModalVisible ?

            <Modal />

            : null}
      </Content>
    </Container>
  )
}
