import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const HeaderDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 10rem;
background: #CDCDCD;
  `;
  export const TextDiv = styled.div`
width: 100%;
h1{
  width: 100%;
  color: #3d3d4d;
}
  `;
  export const ButtonDiv = styled.div`

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