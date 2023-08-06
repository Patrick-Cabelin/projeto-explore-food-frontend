import styled from "styled-components"

export{Container}

const  Container = styled.header`
    grid-area: header;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 6.4rem;

    width: 100%;
    height: 11.4rem;
    padding: 5.6rem 2.8rem 2.4rem;

    background: ${({theme})=> theme.COLORS.DARK_700};

    
    h1{
        font: ${({theme})=> theme.FONTS.ROBOTO_BIG_BOLD};    
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    span{
        font: ${({theme})=> theme.FONTS.ROBOTO_SMALLEST_REGULAR};    
        color: ${({theme})=> theme.COLORS.CAKE_200};
    }

    
    @media (min-width: 769px) {
        div:nth-child(2){
            display: flex;
            gap: 1rem;
            align-items: center;
            width: 30rem;
            justify-content: center;
        }
        > div:first-child{
         display: none;
        }

        > div{
            width: 21.6rem;
            svg{
                display: block;
            }
        }
    }
`