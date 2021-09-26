import {ThemeProvider} from 'styled-components'
import Header from './components/Header';
import GlobalStyles from './components/style/Global';
import theme from './data/theme';



function App() {
  return (
    <ThemeProvider theme = {theme} >

      <>
        <GlobalStyles />
        <Header theme={theme} />

      </>

    </ThemeProvider>
  );
}

export default App;
