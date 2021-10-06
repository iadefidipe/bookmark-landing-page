import { menuData } from "../data/menuData"
import { MenuStyle, MenuText } from "./style/Menu.style"

const Menu = ({header,column,border,gap}) => {
    return (
    
        <MenuStyle column ={column} border={border}>
            {menuData.map( (data) => ( <MenuText header={header} key={data.id} border={border} to={data.link} > <p>{data.title} </p>  </MenuText> ))}

        </MenuStyle>
            
    
    )
}

export default Menu
