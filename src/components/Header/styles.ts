import styled from 'styled-components';

export const Container = styled.div`
width: 100% ;
  background: #CDCDCD;
  padding: 30px 0;
   `;
export const Content = styled.div`
width: 100% ;
padding: 2rem 1rem 1rem 2rem;
display: flex;
align-items: center;
justify-content: space-between;
.HeaderButton{
  font-size: 1rem;
  color: #FFF;
  background: #ea1d2c;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  transition: filter 0.2s;
  &:hover{
    filter:brightness(0.9);
  }
}
button{
  font-size: 1rem;
  color: #000;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  transition: filter 0.2s;
  &:hover{
    filter:brightness(0.9);
  }
}
`; 

