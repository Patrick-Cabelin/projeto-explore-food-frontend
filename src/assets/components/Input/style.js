import styled from "styled-components";

export { Container };

const Container = styled.div`
  width: 100%;
  display: none;

  input{
    width: 100%;
    height: 5.6rem;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    background: ${({ theme }) => theme.COLORS.GRAY_300};
    
    border:none;
    border-radius: 1rem;
    
    padding: 1.9rem 2.4rem;
  
    &placeholder{
        color:${({ theme }) => theme.COLORS.GRAY_100};
    }

    > svg {}

  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;

    input{
      /* background-color: red; */
    }
  }
`;