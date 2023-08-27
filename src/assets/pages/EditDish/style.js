import { styled }  from 'styled-components'

const Container = styled.div`
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

    label{
        font: ${({theme})=> theme.FONTS.ROBOTO_SMALL_REGULAR};
        color: ${({theme})=> theme.COLORS.LIGHT_400};

        margin-bottom: 1.6rem;
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
                margin-top: 1.6rem;
                padding: 1.2rem 3.2rem;

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
        
        label:nth-child(4){
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

    > div:nth-child(3){
        display: flex;
        flex-direction: column;
    } 
`


export {Container,Content, DishInfo}