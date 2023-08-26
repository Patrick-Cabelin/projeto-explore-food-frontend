import { styled }  from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas:
        'header'
        'content'
        'footer'
        ;


footer{
    grid-area: footer;
}
`
const Content = styled.main``
const DishInfo = styled.form``


export {Container,Content, DishInfo}