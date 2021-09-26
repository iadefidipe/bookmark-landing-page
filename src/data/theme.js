
import logo from "../app/images/logo-bookmark.svg"
import logoFooter from "../app/images/logo-bookmark-footer.svg"
import logoDrop from "../app/images/logo-bookmark-drop.svg"
import chrome from "../app/images/logo-chrome.svg"
import firefox from "../app/images/logo-firefox.svg"
import opera from "../app/images/logo-opera.svg"
import arrow from "../app/images/icon-arrow.svg"
import close from "../app/images/icon-close.svg"
import facebook from "../app/images/icon-facebook.svg"
import twitter from "../app/images/icon-twitter.svg"
import hamburger from "../app/images/icon-hamburger.svg"
import error from "../app/images/icon-error.svg"
import feature1 from "../app/images/illustration-features-tab-1.svg"
import feature2 from "../app/images/illustration-features-tab-2.svg"
import feature3 from "../app/images/illustration-features-tab-3.svg"
import hero from "../app/images/illustration-hero.svg"
import rectangleLeft from "../app/images/rectangleLeft.svg"
import rectangleRight from "../app/images/rectangleRight.svg"


const theme ={
    colors:{
      pryBlue:'hsl(231, 69%, 60%)',
      pryRed: 'hsl(0, 94%, 66%)',
      neuBlue:'hsl(229, 8%, 60%)',
      neuDarkBlue: 'hsl(229, 31%, 21%)',
      neuWhite: 'hsl(0, 0%, 97%)',
      white: '#fff'
    },
    font:{
      rubik:`'Rubik', sans-serif`
    },
    weight:{
      regular: '400',
      medium:'600'
    },
    queries:{
      mobile: `${576/16}rem`,
      tablet: `${786/16}rem`,
      deskMini: `${976/16}rem`
    },
    button:{
      padding:'0.625rem 1.5rem',
      radius:'0.3125rem',
      shadow:'0 8px 8px -4px #4a5ecf20'
    },
    btnNav: 'LOGIN',
    rectangleLeft: rectangleLeft,rectangleRight: rectangleRight,
    logo:{
        header:logo,
        drop:logoDrop,
        footer:logoFooter,
        chrome:chrome,
        firefox:firefox,
        opera:opera
    },
    icon:{
      arrow: arrow,
      facebook:facebook,
      twitter:twitter,
      hamburger: hamburger,
      close:close,
      error:error
    },
    illustrations:{
      feature1: feature1,
      feature2: feature2,
      feature3: feature3,
    },
    heroData:{
      title: 'A Simple Bookmark Manager',
      text: 'A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
      btnChrome: 'Get it on Chrome',
      btnFirefox: 'Get it on Firefox',
      illustration: hero

    }
  }

  export default theme 