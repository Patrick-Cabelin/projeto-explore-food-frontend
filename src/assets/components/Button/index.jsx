import { Conteiner } from './style';

function Button({title, disabled = false, icon: Icon, orderNumber = false, className,...rest}){

    return(
       <Conteiner
            {...rest}
            className={className}
            disabled = {disabled}
       >
        <button  className={className}>
            {Icon &&<Icon size={20}/>}
            <span>{title}</span>
            <span className='order'>{orderNumber}</span>
        </button>
       </Conteiner>
    )
}

export {Button}