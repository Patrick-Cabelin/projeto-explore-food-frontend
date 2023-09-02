import { styled } from 'styled-components'

const Container = styled.footer`
    grid-area: footer;
    height: 7.7rem;
    margin-top: 2.5rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    background: ${({theme})=> theme.COLORS.DARK_600};

    svg{
        fill:  ${({theme})=> theme.COLORS.LIGHT_700};
        width: 2.2rem;
        height: 2.2rem;
    }

    p:first-child{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .7rem;

        font: ${({theme})=> theme.FONTS.ROBOTO_BIGGER_BOLD};
        font-size: 1rem;
        color:  ${({theme})=> theme.COLORS.LIGHT_700}
    }

    p:last-child{
        font: ${({theme})=> theme.FONTS.ROBOTO_SMALLER_REGULAR};
        font-size: 1rem;
        color:  ${({theme})=> theme.COLORS.LIGHT_200}
    }

    @media (min-width: 769px) {
        justify-content: space-around;
        margin-top: 15.5rem;
        p:first-child{
            font-size: 2.4rem;
        }
       
        p:last-child{
            font-size: 1.4rem;
        }
    }
`

export { Container }