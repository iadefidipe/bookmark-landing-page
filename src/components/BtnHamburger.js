// import Hamburger from "../app/images/icon-hamburger.svg"
import { HamburgerStyle } from "./style/Hamburger.style"

const BtnHamburger = ({hamburger,toggle}) => {
    return (
        <HamburgerStyle src={hamburger} onClick={toggle} alt="" />
    )
}

export default BtnHamburger
