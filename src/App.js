import {ThemeProvider} from 'styled-components'
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import GlobalStyles from './components/style/Global';
import theme from './data/theme';
import Cta from './components/Cta';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Features from './components/Features';



function App() {
  return (
    <ThemeProvider theme = {theme} >

      <>
        <GlobalStyles />
        <Header theme={theme} />
        <Hero theme = {theme}/>
        <Features theme={theme} />
        <Download theme = {theme} />
        <FAQ theme ={theme}/>
        <Cta theme={theme} />
        <Footer theme = {theme} />

      </>

    </ThemeProvider>
  );
}

export default App;
