import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 32rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;

    div:first-child{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        
        h1{
            font: ${({theme})=>theme.FONTS.ROBOTO_BIGGER_BOLD};
            font-size: 3.7rem;
            color: ${({theme})=> theme.COLORS.LIGHT_100};
            width: 21.7rem;
        }
        
    }

    h2{
        display: none;
    }

    form + div{
        width: 100%;
        margin: 3.2rem 0;

        span{
            font: ${({theme})=>theme.FONTS.POPPINS_100_MEDIUM};
            color: ${({theme})=> theme.COLORS.LIGHT_100};
        }
        
    }
    
    button{
        font: ${({theme})=> theme.FONTS.POPPINS_100_MEDIUM};
    }
    
    div:last-child{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    label:nth-child(3) + div{
        margin-bottom: 3.2rem;
    }

    @media (min-width: 769px) {
        flex-direction: row;
        gap: 30.7rem;

        h2{
            display: block;
            font: ${({theme})=> theme.FONTS.POPPINS_400_MEDIUM};
            color: ${({theme})=> theme.COLORS.LIGHT_100};
            margin: auto;
        }
        form{
            margin-top:  3.2rem ;

            label:nth-child(3) + div{
                margin-bottom: 3.2rem;
            }
        }

        > div:last-child{
            background:${({theme})=> theme.COLORS.DARK_700};
            border-radius: 1.5rem;
            padding: 6.4rem;
        }
    }
    
    `
const DataUser = styled.form`
    width: 32rem;
    margin-top: 7.3rem;
    
    display: flex;
    flex-direction: column;
    
    label{
        font: ${({theme})=>theme.FONTS.ROBOTO_SMALL_REGULAR};
        color: ${({theme})=> theme.COLORS.LIGHT_400};
        margin-bottom: .8rem;
    }

    label ~ div{
        width: 100%;
        height: 4.8rem;
    }
    
    div:nth-child(2){
        margin-bottom: 3.2rem;
    }
    
    
    `

export { Container, DataUser}