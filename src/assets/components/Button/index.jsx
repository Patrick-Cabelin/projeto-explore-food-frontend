import { Conteiner } from './style';

function Button({title, disabled = false, icon: Icon, className,...rest}){
    return(
       <Conteiner
            {...rest}
            className={className}
            disabled = {disabled}
       >
        <button  className={className} disabled={false}>
            {Icon &&<Icon size={20}/>}
            <span>{title}</span>
            <span className='order'>{rest.orderNumber}</span>
        </button>
       </Conteiner>
    )
}

export {Button}