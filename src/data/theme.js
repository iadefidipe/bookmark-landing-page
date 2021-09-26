
import logo from "../app/images/logo-bookmark.svg"
import logoFooter from "../app/images/logo-bookmark-footer.svg"
import logoDrop from "../app/images/logo-bookmark-drop.svg"
import chrome from "../app/images/logo-chrome.svg"
import firefox from "../app/images/logo-firefox.svg"
import opera from "../app/images/logo-opera.svg"



const theme ={
    colors:{
      pryBlue:'hsl(231, 69%, 60%)',
      pryRed: 'hsl(0, 94%, 66%)',
      neuBlue:'hsl(229, 8%, 60%)',
      neuDarkBlue: 'hsl(229, 31%, 21%)',
      white: '#fff'
    },
    font:{
      rubik:`'Rubik', sans-serif`
    },
    weight:{
      regular: '400',
      medium:'500'
    },
    queries:{
      mobile: `${576/16}rem`,
      tablet: `${786/16}rem`,
      deskMini: `${976/16}rem`
  
  
    },
    button:{
      padding:'0.625rem 1.5rem',
      radius:'0.3125rem',
      shadow:'0 8px -4px #4a5ecf20'
    },
    logo:{
        header:logo,
        drop:logoDrop,
        footer:logoFooter,
        chrome:chrome,
        firefox:firefox,
        opera:opera
    }
  }

  export default theme 