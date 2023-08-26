import { Container} from './style'

function DishIngredients({value, onClick, isNew,...rest}){

    return(
        <Container isNew={isNew} {...rest}>
            <input type="text" value={value} readOnly={!isNew}/>

            <button type='button' onClick={onClick} className= {isNew? 'button-delete': 'button-add'}>

                {/* {isNew? </>: </>} */}
            </button>
        </Container>
    )
}

export {DishIngredients}