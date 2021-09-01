import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
z-index: 10;
background-color: rgba(0,0,0, 0.8);
display: flex;
align-items: center;
justify-content: center;
`;

export const ModalDiv = styled.div`
background-color: #fff;
width: 60%;
height: 60%;
border-radius: 20px;
position: absolute;
button{
    background-color: transparent;
    display: flex;
    align-items: center;
    position: relative;
    top: 16px;
    outline: none;
    right: calc(-100% + 100px);
    border: none;
    color: #000;
    width: 32px;
    height: 32px;
}
`

export const ModalContent = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
  h2{
    color: #000;
    font-size: 1.5rem;
    margin-bottom:2rem;
  }
  input{
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    &::placeholder{
      padding: 0.2rem;
    }
    & + input{
      margin-top: 1rem;
    }
  }
  button[type="submit"]{
    width:100%;
    padding: 0 1.5rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ea1d2c;
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover{
      filter:brightness(0.9);
    }
  }
`;