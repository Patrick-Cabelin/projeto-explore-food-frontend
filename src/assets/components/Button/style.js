import styled from "styled-components";

export { Conteiner };

const Conteiner = styled.div`
  
  .version_mobile{
    width: 3.7rem;
    height: 3.7rem;

    svg{
      width: 3.7rem;
      height: 3.7rem;
    }
    background: none;

    .order{
      position: absolute;
      top: -0.6rem;
      left: 3.4rem;
      width: 2.5rem;
      height: 2.1rem; 

      border-radius: 50%;

      background: ${({theme}) => theme.COLORS.TOMATO_100 };
      color: ${({theme}) => theme.COLORS.LIGHT_100 };
    }
  }
  
  .version_desktop, button{
    width: 100%;
    height: 5.6rem;
    position: relative;
    padding: 1.2rem 3.2rem;
    
    background: ${({theme})=> theme.COLORS.TOMATO_100};
    border-radius: .5rem;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .7rem;
    
    svg{
      width: 3.2rem;
      height: 3.2rem;
    }
    
    span{
      font: ${({theme}) => theme.FONTS.POPPINS_100_MEDIUM};
      color: ${({theme}) => theme.COLORS.LIGHT_100 };
    }

    &:disabled{
      background: ${({theme}) => theme.COLORS.TOMATO_400 };
      cursor: not-allowed;
    }

    
    @media (min-width: 769px) {
      background: ${({theme}) => theme.COLORS.TOMATO_100 }; 
      gap: .8rem;

      span:last-child{
        display: flex;
        position: initial;
        background: none;
        font: ${({theme}) => theme.FONTS.POPPINS_100_MEDIUM};
      }

      &:hover{
      background: ${({theme}) => theme.COLORS.TOMATO_200 };
    }
    }
  }
`;