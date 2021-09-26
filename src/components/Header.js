import { Container } from "./style/container.style"
import { StyledHeader, Nav,NavMenu } from "./style/Header.style"
import { Logo } from "./style/Logo.style"
import logo from "../app/images/logo-bookmark.svg"
import { Button } from "./style/Button.style"
import BtnHamburger from "./BtnHamburger"
import { menuData } from "../data/menuData"


const Header = ({theme}) => {
    return (
       <Container>

           <StyledHeader>
               <Logo src={logo} />

               <Nav>
                   <BtnHamburger />
                   <NavMenu>

                   {menuData.map( (data) => ( <p key={data.id}> {data.title} </p> ))}

                   <Button bgcolor={theme.colors.pryRed} color={theme.colors.white}>LOGIN</Button>

                   </NavMenu>
                   
                   
               </Nav>

           </StyledHeader>



       </Container>
    )
}

export default Header
