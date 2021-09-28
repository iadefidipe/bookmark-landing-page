
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
      mobileMini: `${375/16}rem`,
      tablet: `${786/16}rem`,
      deskMini: `${976/16}rem`,
      deskMid: `${1129/16}rem`

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
        footer:logoFooter
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

    },
    ctaData:{
      title: 'Stay up-to-date with what we’re doing',
      text: '35,000+ ALREADY JOINED',
      btnText: 'Contact Us',
      placeholder: 'Enter your email address'
    },
    downloadData:{
      title: 'Download the extension',
      subtitle: 'We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.',
      cardShadow:'0 10px 20px -5px #4a5ecf20',
      cardData: [
        {
          id: 1,
          image: chrome,
          imageAlt: "chrome logo",
          title: "Add to Chrome",
          description: "Minimum version 62",
          link: "/",
          buttonText: "Add & Install Extension",
        },
        {
          id: 2,
          image: firefox,
          imageAlt: "firefox logo",
          title: "Add to Firefox",
          description: "Minimum version 55",
          link: "/",
          buttonText: "Add & Install Extension",
        },
        {
          id: 3,
          image: opera,
          imageAlt: "opera logo",
          title: "Add to Opera",
          description: "Minimum version 646",
          link: "/",
          buttonText: "Add & Install Extension",
        },
      ]

    }
  }

  export default theme 