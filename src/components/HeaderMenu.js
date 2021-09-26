import { Button } from "./style/Button.style"
import { menuData } from "../data/menuData"
import { NavMenu } from "./style/NavMenu.style"

const HeaderMenu = ({theme}) => {
    return (
        <NavMenu>

        {menuData.map( (data) => ( <p key={data.id}> {data.title} </p> ))}

        <Button bgcolor={theme.colors.pryRed} color={theme.colors.white}>{theme.btnNav}</Button>

        </NavMenu>
    )
}

export default HeaderMenu