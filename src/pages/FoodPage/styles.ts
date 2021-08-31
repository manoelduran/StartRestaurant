import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
`;

export const HeaderDiv = styled.div`
width: 100% ;
background: #CDCDCD;
padding: 2rem;
display: flex;
align-items: center;
justify-content: space-between;
h1{
  color: #3d3d4d;
}
button{
  color: #FFF;
  background: #ea1d2c;
  border: 0;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  transition: filter 0.2s;
  &:hover{
    filter:brightness(0.9);
  }
  }
  `;
export const BannerDiv = styled.div`
margin-top: 3rem;
display: flex;
align-items: center;
justify-content: center;
img{
  border-radius: 2rem;
}
`;

export const ContentDiv = styled.div`
display: flex ;
align-items: center;
flex-direction: column;
margin-top: 2rem;
p{
  font-size: 1rem;
    color: #3d3d4d;
  }
span{
  font-size: 2rem;
  margin-top: 1rem;
  color: #39b100;
}
`;