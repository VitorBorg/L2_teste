import styled from "styled-components";

export const Content = styled.ul`
  display: flex;
  margin: 10rem 20% 0 20%;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  gap: 15rem;
`;

export const TextInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 30%;

  gap: 2rem;
`;

export const SpanSub = styled.span`
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-top: 30px;
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const figure = styled.figure`
  img{
    max-width: 80%;
  }
`;
