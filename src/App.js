import {ThemeProvider} from 'styled-components'
import Header from './components/Header';
import GlobalStyles from './components/style/Global';

const theme ={
  colors:{
    pryBlue:'hsl(231, 69%, 60%)',
    pryRed: 'hsl(0, 94%, 66%)',
    neuBlue:'hsl(229, 8%, 60%)',
    neuDarkBlue: 'hsl(229, 31%, 21%)'
  },
  font:{
    rubik:`'Rubik', sans-serif`
  },
  queries:{
    mobile: `${576/16}rem`,
    tablet: `${786/16}rem`

  }
}

function App() {
  return (
    <ThemeProvider theme = {theme} >

      <>
        <GlobalStyles />
        <Header />

      </>

    </ThemeProvider>
  );
}

export default App;
