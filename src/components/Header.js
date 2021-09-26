import { Container } from "./style/container.style"
import { StyledHeader, Nav } from "./style/Header.style"
import { Logo } from "./style/Logo.style"
// import logo from "../app/images/logo-bookmark.svg"
import BtnHamburger from "./BtnHamburger"
import HeaderMenu from "./HeaderMenu"
import MobileMenu from "./MobileMenu"



const Header = ({theme}) => {
    return (
       <Container>

           <StyledHeader>
               <Logo src={theme.logo.header} />

               <Nav>
                   <BtnHamburger />
                   
                   <HeaderMenu theme={theme} />
                   
                
                   
               </Nav>

           </StyledHeader>

           {/* <MobileMenu /> */}



       </Container>
    )
}

export default Header
