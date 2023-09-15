import { styled } from 'styled-components'

const Container = styled.div`
    .alice-carousel__dots{
            display: none;
    } 

    .alice-carousel__prev-btn, .alice-carousel__next-btn{
        display: none;
    }
    
    button{
        cursor: pointer;
    }

    @media (min-width: 769px) {
               

        .alice-carousel__prev-btn{
            display: flex;
            
            width: auto;
            height: 100%;

            button{
                position: absolute;
                z-index: 1;
                top: 0;
                left: 0;
                
                border: none;
                background: linear-gradient(to bottom, #000A0F, #000A0F44);
                width: 27.8rem;
                height: 100%;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};

                display: flex;
                align-items: center;
                justify-content: flex-start;
            }
            

        }

        .alice-carousel__next-btn{
            display: flex;

            width: auto;
            height: 100%;

            button{
                position: absolute;
                z-index: 1;
                right: 0;
                top: 0;

                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                border: none;
                background: linear-gradient(to bottom, #000A0F, #000A0F44);
                width: 27.8rem;
                height: 100%;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
            }

        }
    
    }
`


export { Container }