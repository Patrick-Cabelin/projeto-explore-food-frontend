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

    @media (min-width: 769px) {
        main{
            width: 116rem;
            margin: auto;

            >div{
                width: 100%;
                height: 26rem;
                justify-content: center;

                img{
                    left: -18rem;
                    height: 29rem;
                }

                div{
                    width: auto;

                    h1{
                        font: ${({theme})=> theme.FONTS.POPPINS_500_MEDIUM};
                    }

                    p{
                        font: ${({theme})=> theme.FONTS.ROBOTO_SMALL_REGULAR};
                    }
                }
            }
        
            section{
                h2{
                    margin-bottom: 2.2rem;
                }

                > div{
                    width: 100%;
                    height: 53rem;
                    position: relative;
                }
            }
        }

    }
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
        
        height: 12rem;
        text-align: start;

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
            align-items: flex-start;
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
    width: 100%;
   
    h2{
        font: 500 1.8rem/140% "Poppins", sans-serif;
    }
    
    > div{
        display: flex;
        align-items: center;
        
        width: 38rem;
        height: 35rem;
        overflow-x: auto;

    }

`


export { Container, Content, Menu }