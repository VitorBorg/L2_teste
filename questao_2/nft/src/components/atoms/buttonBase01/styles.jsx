import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 30px;

  background: ${(props) => props.background};
  opacity: ${(props) => props.opacity};

  border: ${(props) => props.border};
  box-shadow: inset -4px -4px 4px rgba(0, 0, 0, 0.1), inset 4px 4px 4px rgba(255, 255, 255, 0.1);
  border-radius: 12px;

  outline: none;
  cursor: pointer;

  max-width: 600px;

  max-width: 600px;

  span {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: ${(props) => props.theme.fontSize.headline7};
    font-weight: 600;
    letter-spacing: 0.2px;
    white-space: nowrap;
    color: ${(props) => props.color};
  }
`;