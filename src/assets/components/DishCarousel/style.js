import { styled } from 'styled-components'

const Container = styled.div`

    .rec-item-wrapper{
        height: 37rem;
    }
    .rec.rec-arrow{
        display: none;
    }

    >div:first-child, > div:last-child{
        button{
            display: none;
       }   
    }
    @media (min-width: 769px) {
        .rec-item-wrapper{
            height: 53rem;
        }

        > div:first-child{
            height: 100%;
            position: absolute;
            z-index: 1;

            button{
                border: none;
                background: linear-gradient(to bottom, ${({theme})=> theme.COLORS.DARK_400}, ${({theme})=> theme.COLORS.DARK_450});
                width: 27.8rem;
                height: 100%;
            
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
            }
        }

        >div:last-child{
            height: 100%;
            position: absolute;
            z-index: 1;
            right: 0;

            button{
                border: none;
                background: linear-gradient(to bottom, ${({theme})=> theme.COLORS.DARK_400}, ${({theme})=> theme.COLORS.DARK_450});
                width: 27.8rem;
                height: 100%;
            
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
            }
        }
    
    }
`


export { Container }