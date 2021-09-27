import { menuData } from "../data/menuData"
import { MenuStyle, MenuText } from "./style/Menu.style"

const Menu = ({header,column}) => {
    return (
    
        <MenuStyle column ={column}>
            {menuData.map( (data) => ( <MenuText header={header} key={data.id}> {data.title} </MenuText> ))}

        </MenuStyle>
            
    
    )
}

export default Menu
