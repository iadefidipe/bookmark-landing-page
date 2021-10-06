import { Dropdown,Flex, Option,Social} from "./style/Dropdown.style"
import Menu from "./Menu"
import SocialIcons from "./SocialIcons"
import Logo from "./Logo"
import BtnHamburger from "./BtnHamburger"
import { Button } from "./style/Button.style"

const MobileMenu = ({theme, toggle}) => {
    return (
        
        <Dropdown>

            <Flex>
            
                <Logo src={theme.logo.drop} />
                <BtnHamburger hamburger={theme.hamburger.close} toggle={toggle} />

            </Flex>
        
            
            <Option>
                <Menu column={true} border={true} />
                
                <Button mobile={true} color={theme.colors.white}>{theme.btnNav}</Button>
            </Option>

            <Social>
                <SocialIcons />
            </Social>
        </Dropdown>
    )
}

export default MobileMenu
