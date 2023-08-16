import styled from "styled-components";

export { Conteiner };

const Conteiner = styled.div`
  
  button{
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

    
    svg{
      width: 3.2rem;
      height: 3.2rem;
    }

    span:nth-child(2){
      display: none;
    }

    /* span:last-child{
      position: absolute;
      top: 0.7rem;
      left: 5.1rem;
      width: 2rem;
      height: 2rem;

      border-radius: 50%;

      background: ${({theme}) => theme.COLORS.TOMATO_200 };
      color: ${({theme}) => theme.COLORS.LIGHT_100 };
    
    } */
    

    &:disabled{
      background: ${({theme}) => theme.COLORS.TOMATO_400 };
      cursor: not-allowed;
    }

    
    @media (min-width: 769px) {
      background: ${({theme}) => theme.COLORS.TOMATO_100 }; 
      gap: .8rem;
      
      span:nth-child(2){
        display: inline-flex;
        font: ${({theme}) => theme.FONTS.POPPINS_100_MEDIUM};
        color: ${({theme}) => theme.COLORS.LIGHT_100 };
      }
      
      /* span:last-child::before{
        content: '(';
      }
       */
      span:last-child{
        display: flex;
        position: initial;
        background: none;
        font: ${({theme}) => theme.FONTS.POPPINS_100_MEDIUM};
      }

      /* span:last-child::after{
        content: ')';
      } */
      

      &:hover{
      background: ${({theme}) => theme.COLORS.TOMATO_200 };
    }
    }
  }
`;