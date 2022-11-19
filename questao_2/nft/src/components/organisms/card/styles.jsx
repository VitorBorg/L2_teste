import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: row;
  order: 2;
  flex-grow: 0;

  padding: 1.2rem;

  width: 448px;
  height: 767px;

  border: 1px solid ${(props) => props.theme.colors.dark};
  border-radius: 20px;
`;

export const Image = styled.figure`
  display: flex;

  img {
    border-radius: 10px;
    width: 100%;
    box-shadow: 0px 0px 40px ${(props) => props.theme.colors.dark};
  }
`;

export const ImageIcon = styled.figure`
  display: flex;

  img {
    clip-path: circle();
    width: 1.8rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;

  div:first-child{
    display: flex;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;
`;

export const Timing = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
  margin-top: 1rem;

  span {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSize.normal};
    font-weight: 100;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.colors.dark};
`;

export const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 1rem;
`;

export const DataContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1.2rem;

  span {
    color: ${(props) => props.theme.colors.SuperLight2};
  }
  
  div {
    display: flex;
    
    figure {
      border: white;
      border-radius: 10px;
    }
  }

  
  *:not(:first-child) {
      margin-left: -.4rem;
  }
`;

