import styled from 'styled-components'

const  Container = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 11.4rem;
    padding: 5.6rem 2.8rem 2.4rem;

    background: ${({theme})=> theme.COLORS.DARK_700};

    h1{
        font: ${({theme})=> theme.FONTS.ROBOTO_BIG_BOLD};    
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: .8rem;
    }

    span{
        font: ${({theme})=> theme.FONTS.ROBOTO_SMALLEST_REGULAR};    
        color: ${({theme})=> theme.COLORS.CAKE_200};
    }

    > div:nth-child(2){
        display: flex;
        gap: .8rem;

        svg{
            fill: ${({theme})=> theme.COLORS.CAKE_100};
        }
    }

    > div:nth-child(3){
        display: none;
    }

    > div:last-child{
        display: none;
    }

    .version_mobile{
        display: flex;
    }

    .version_desktop{
        display: none;
    }

    @media (min-width: 769px) {
        justify-content: center;
        gap: 3.2rem;
        
        .version_mobile{
            display: none;
        }

        .version_desktop{
            display: flex;
        }

        h1{
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
        }

        div:nth-child(2){
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            justify-content: center;
        }
        > div:first-child{
            display: none;
        }

        > div:nth-child(3){
            display: flex;
            width: 58rem;
        }


        div:last-child{
            display: block;
        }
    }
`

export{Container}