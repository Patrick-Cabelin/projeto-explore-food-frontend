import styled from "styled-components";

export { Container };

const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_900};
  
  border-radius: .5rem;
  
  display: flex;
  justify-content: center;
  align-items: center;

  input{
    padding: 1.2rem 1.4rem;
    width: 100%;
    height: 4.8rem;

    font-size: 1.6rem;
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background: none;
    
    border:none;
    border-radius: 1rem;
    outline: none;
    text-align: center;
    
    &placeholder{
        color:${({ theme }) => theme.COLORS.LIGHT_500};
        color: pink;
      }    
      
      &:focus{
        outline: .1rem solid ${({ theme }) => theme.COLORS.LIGHT_500};
      }

  }

  > div:first-child{
    position: absolute;
    left: 0;

    svg{
      margin: 1.2rem 1.4rem;
    }
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem

  }
`;