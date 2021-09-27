import {ThemeProvider} from 'styled-components'
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import GlobalStyles from './components/style/Global';
import theme from './data/theme';
import Cta from './components/Cta';



function App() {
  return (
    <ThemeProvider theme = {theme} >

      <>
        <GlobalStyles />
        <Header theme={theme} />
        <Hero theme = {theme}/>
        <Cta />
        <Footer theme = {theme} />

      </>

    </ThemeProvider>
  );
}

export default App;
