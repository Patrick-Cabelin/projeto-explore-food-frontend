import { styled }  from 'styled-components'

const Container = styled.div`
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

            form{
                align-items: flex-end;

                > div{
                    width: 100%;
                }

                > div:first-child{
                    flex-direction: row;
                    align-items: center;
                    gap: 3.2rem;

                    div:nth-child(1){
                        flex: .5;
                    }
                    div:nth-child(2){
                        flex: 1;
                    }
                    div:nth-child(3){
                        flex: .5;
                    }

                }

                > div:nth-child(2){
                    flex-direction: row;
                    gap: 3.2rem;

                    > div:nth-child(1){
                        flex: 1.5;
                    }
                    
                    > div:nth-child(2){
                        flex: .5;
                    }
                }

                > div:last-child{
                    width: 17.2rem;
                } 
            
            }
            
        }
    }
`
const Content = styled.main`
    grid-area: content;
    margin: auto;

    width: 36.4rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-top: 1.1rem;
    
    h1{
        font: ${({theme})=> theme.FONTS.POPPINS_400_MEDIUM};
        color: ${({theme})=> theme.COLORS.LIGHT_300};
    }
    
    > button{
        font-size: 1.6rem;
        
        svg{
            width: 2.2rem;
            height: 2.2rem;
        }
    }

`

const DishInfo = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .info_box_wrapper{
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        margin-top: 2.4rem;
    }

    label{
        font: ${({theme})=> theme.FONTS.ROBOTO_SMALL_REGULAR};
        color: ${({theme})=> theme.COLORS.LIGHT_400};
    }

    > div:first-child{
        display: flex;
        flex-direction: column;
        
        label:first-child{

            > div{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: .8rem;
                
                background: ${({theme})=> theme.COLORS.DARK_800};
                border-radius: .8rem;
                height: 4.8rem;
                padding: 1.2rem 3.2rem;
                margin-top: 1.6rem;
                
                font: ${({theme})=> theme.FONTS.POPPINS_100_MEDIUM};
                color: ${({theme})=> theme.COLORS.LIGHT_100};
                
                input{
                    display: none;
                }
           }
        }

        select{
            display: flex;
            align-items: center;
            
            height: 4.8rem;
            padding: 1rem;

            background: ${({theme})=> theme.COLORS.DARK_900};
            color: ${({theme})=> theme.COLORS.LIGHT_400};
            
            border: none;
            border-radius: .5rem;
        }
        
        #Icategory + label{
            margin-top: 1.6rem;
        }
    }

    > div:nth-child(2){
        display: flex;
        flex-direction: column;

        input{
            text-align: start;
        }
    }

    #Iingredients{
        display: flex;
        align-items: center;
        gap: 1.6rem;
        flex-wrap: wrap;
        margin-bottom: 2.4rem;
    }

    > div:nth-child(3){
        display: flex;
        flex-direction: column;
    } 
`


export {Container,Content, DishInfo}