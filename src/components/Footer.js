import Menu from "./Menu"
import SocialIcons from "./SocialIcons"
import { Container } from "./style/container.style"
import { Footerdiv, StyledFooter } from "./style/Footer.style"
import Logo from "./Logo"


const Footer = ({theme}) => {
    const column = true
    return (
       
            <StyledFooter>

                <Container>
                    <Footerdiv>
                        <Logo  src={theme.logo.footer} />
                        <Menu column={column} />
                    </Footerdiv>
                    

                    <SocialIcons  theme={theme} />
                </Container>

            </StyledFooter>

        
    )
}

export default Footer
