import { styled }  from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;

`
const Header= styled.div`
    width: 100%;
    height: 11.4rem;
    background: ${({theme})=> theme.COLORS.DARK_700};
    
    
    display: flex;
    align-items: center;
    padding: 2.8rem;
    margin-bottom: 3.6rem;
    
    div{
        display: flex;
        gap: 1.6rem;

        >span{
            color: ${({theme})=> theme.COLORS.LIGHT_100};
            font: ${({theme})=> theme.FONTS.ROBOTO_SMALL_REGULAR};
            font-size: 2.1rem;
           
        }
    }
    `

const Navigate= styled.div`
    width: 37.2rem;
    height: 67.7rem;
    margin: auto;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.6rem;
    
    > div{
        width: 100%;
        position: relative;
        
        > div{
            left: 2rem;
        }
    }
    > button{
        padding: 1rem;
        width: 100%;
        color: ${({theme})=> theme.COLORS.LIGHT_300};;
        font: 300 2.4rem/140% "Poppins", sans-serif;
        border-bottom: .1rem solid ${({theme})=> theme.COLORS.DARK_1000};
    }

    svg{
        width: 2.4rem;
        height: 2.4rem;
    }

`


export {Container, Header, Navigate}