import styled from "styled-components";

export { Conteiner };

const Conteiner = styled.button`
  width: 100%;
  height: 5.6rem;

  background: ${({theme}) => theme.COLORS.PINK };

  border-radius: 1rem;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3.2rem;

  cursor: pointer;

  &:hover{
    filter: brightness(.9);
  }

  svg{
    width: 2.4rem;
    height: 2.4rem;
    margin-right: .8rem;
  }
`;