import { Container, Content} from './styles';
import Logo from '../../assets/Logo.png';
import { useState } from 'react';
import { Modal } from '../Modal';



export default function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function handleOpenModal() {
    setIsModalVisible(true)
  }
  return (
    <Container>
      <Content>
        <img src={Logo} width="200px" height="200px" alt="dt money"></img>
        <button className="HeaderButton" type="button" onClick={handleOpenModal}>Novo Prato</button>
          {isModalVisible ?

            <Modal onClose={() => setIsModalVisible(false)}>
            </Modal>

            : null}
      </Content>
    </Container>
  )
}
