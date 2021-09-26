import {ThemeProvider} from 'styled-components'
import Header from './components/Header';
import Hero from './components/Hero';
import GlobalStyles from './components/style/Global';
import theme from './data/theme';



function App() {
  return (
    <ThemeProvider theme = {theme} >

      <>
        <GlobalStyles />
        <Header theme={theme} />
        <Hero theme = {theme}/>

      </>

    </ThemeProvider>
  );
}

export default App;
