import { styled }  from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas:
        'header'
        'content'
        'footer'
        ;
`
const Content = styled.main`
    grid-area: content;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    padding: 0 1.6rem;

    >div{
        display: flex;
        align-items: center;
        margin-top: 4.4rem;

        width: 37.6rem;
        height: 12rem;
        
        background: linear-gradient(to bottom, ${({theme})=> theme.COLORS.DARK_550}, ${({theme})=> theme.COLORS.DARK_650});
        border-radius: .3rem;

        img{
            position: relative;
            top: -1.5rem;
            left: -2.2rem;  
        }

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: .3rem;

            padding: 0 .8rem;
            width: 21.5rem;
                        
            text-align: left;
            color: ${({theme})=> theme.COLORS.LIGHT_300};

            h1{
                font: 700 1.5rem/140% "Poppins", sans-serif;
            }

            p{
                font: 500 1.1rem/140% "Poppins", sans-serif;             
            }
        
        }
    }
`
const Menu = styled.section`
    
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-top: 6.2rem;
   
    h2{
        font: 500 1.8rem/140% "Poppins", sans-serif;
    }
    
    > div{
        display: flex;
        align-items: center;
        
        width: 38rem;
        height: 35rem;
        overflow-x: scroll;

    }

`


export { Container, Content, Menu }