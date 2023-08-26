import { Container }from './style'


function IngredientsTags({title, ...rest}){
    return(
        <Container {...rest}>
            {title}
        </Container>
    )
}
export {IngredientsTags}