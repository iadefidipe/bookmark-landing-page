import { Container } from "./style/container.style"
import { StyledHeader, Nav } from "./style/Header.style"
import BtnHamburger from "./BtnHamburger"
import HeaderMenu from "./HeaderMenu"
import MobileMenu from "./MobileMenu"
import { useState, useEffect } from "react"
import Logo from "./Logo"



const Header = ({theme}) => {
    const [toggleNav, setToggleNav] = useState(false)

    const handleNavToggle = () => {
        setToggleNav(!toggleNav);
      };

     
    useEffect(() => {
      if (toggleNav=== true) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });


    return (
        <>
           { toggleNav ? <MobileMenu theme={theme} toggle={ handleNavToggle } /> : <Container>

                <StyledHeader>
                    <Logo src={theme.logo.header} to="/" />
                    

                    <Nav>
                        <BtnHamburger hamburger={theme.hamburger.open} toggle={handleNavToggle} />                     
                        <HeaderMenu theme={theme} />
                    </Nav>

                </StyledHeader>
            </Container> 

            }
        </>
      
    )
}

export default Header
