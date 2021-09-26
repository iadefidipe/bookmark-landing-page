import { Container } from "./style/container.style"
import { StyledHeader,Logo, Nav,NavMenu } from "./style/Header.style"
import logo from "../app/images/logo-bookmark.svg"
import { Button } from "./style/Button"
import BtnHamburger from "./BtnHamburger"
import { menuData } from "../data/menuData"


const Header = () => {
    return (
       <Container>

           <StyledHeader>
               <Logo src={logo} />

               <Nav>
                   <BtnHamburger />
                   <NavMenu>

                   {menuData.map( (data) => ( <p> {data.title} </p> ))}

                   </NavMenu>
                   
                   <Button>Login</Button>
               </Nav>

           </StyledHeader>



       </Container>
    )
}

export default Header
