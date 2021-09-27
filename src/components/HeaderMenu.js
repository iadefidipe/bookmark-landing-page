import Menu from "./Menu"
import { Button } from "./style/Button.style"

import { NavMenu } from "./style/NavMenu.style"

const HeaderMenu = ({theme}) => {

    const header = true
    return (
        <NavMenu>

            <Menu header={header} />

        

            <Button bgcolor={theme.colors.pryRed} color={theme.colors.white}>{theme.btnNav}</Button>

        </NavMenu>
    )
}

export default HeaderMenu