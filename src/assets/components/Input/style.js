import styled from "styled-components";

export { Container };

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  
  display: none;
  padding: 1.2rem 1.4rem;
  border-radius: .5rem;


  input{
    width: 25rem;
    height: 5.6rem;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: none;
    
    border:none;
    border-radius: 1rem;
    text-align: center;
  
    &placeholder{
        color:${({ theme }) => theme.COLORS.GRAY_100};
    }

    > svg {}

  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem

    input{
      /* background-color: red; */
    }
  }
`;