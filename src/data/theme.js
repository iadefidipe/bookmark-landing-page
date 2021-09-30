
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
import bgDot from "../app/images/bg-dots.svg"
import open from "../app/images/icon-hamburger.svg"
import arrowUp from "../app/images/icon-arrow-up.svg"




const theme ={
    colors:{
      pryBlue:'hsl(231, 69%, 60%)',
      pryRed: 'hsl(0, 94%, 66%)',
      neuBlue:'hsl(229, 8%, 60%)',
      neuDarkBlue: 'hsl(229, 31%, 21%)',
      neuWhite: 'hsl(0, 0%, 97%)',
      white: '#fff',
      bgDrop: 'rgba(37, 43, 70, 0.953)'
    },
    font:{
      rubik:`'Rubik', sans-serif`
    },
    weight:{
      regular: '400',
      medium:'600',
      mid: '500'
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
    hamburger:{
      open: open,
      close: close
    },
    btnNav: 'LOGIN',
    rectangleLeft: rectangleLeft,rectangleRight: rectangleRight,
    bgDot:bgDot,
    logo:{
        header:logo,
        drop:logoDrop,
        footer:logoFooter
    },
    icon:{
      arrow: arrow,
      arrowUp:arrowUp,
      facebook:facebook,
      twitter:twitter,
      hamburger: hamburger,
      close:close,
      error:error
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
          margin: '0px'
        },
        {
          id: 2,
          image: firefox,
          imageAlt: "firefox logo",
          title: "Add to Firefox",
          description: "Minimum version 55",
          link: "/",
          buttonText: "Add & Install Extension",
          margin: '60px'

        },
        {
          id: 3,
          image: opera,
          imageAlt: "opera logo",
          title: "Add to Opera",
          description: "Minimum version 646",
          link: "/",
          buttonText: "Add & Install Extension",
          margin: '120px'

        },
      ]

    },
    faqData:{
      title: "Frequently Asked Questions",
      subtitle:
        "Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.",
      faqButton: {
        text:"More Info",
        link: "/"
      },
      faqs: [
        {
          question: "What is Bookmark?",
          answer:
            "Bookmark is the best bookmarking app on the market that boosts of a clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. ",
        },
        {
          question: "How can I request a new browser?",
          answer:
            "You can request a new browser through our dedicated App store. Visit our store of Google Play or Apple Store. Contact our support team if you encounter any troubles installing the application on your device.",
        },
        {
          question: "Is there a mobile app?",
          answer:
            "Yes! We recently launched a mobile app version for android and iOS. You can proceed to your respective App stores to download Bookmark.",
        },
        {
          question: "What about other Chromium browsers?",
          answer:
            "Chromium browsers are currently in development and scheduled to be released in due time. Our developers are working round the clock to push the final app into production.",
        },
      ],
      
    },
    featureData : {
      title: "Features",
      subtitle:
        "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
      headers: ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"],
        content: [
        {
          image: feature1,
          imageAlt: "an illustration of an item being clicked on a smart device",
          title: "Bookmark in one click",
          description:
            "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
          btnText: "More Info",
          bntLink: "/",
        },
        {
          image: feature2,
          imageAlt: "an illustration depicting a search action on a smart device",
          title: "Share your bookmarks",
          description:
            "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
          btnText: "More Info",
          bntLink: "/",
        },
        {
          image: feature3,
          imageAlt: "an illustration showing people sharing items online",
          title: "Bookmark in one click",
          description:
            "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
          btnText: "More Info",
          bntLink: "/",
        },
      ],
    }
  }

  export default theme 