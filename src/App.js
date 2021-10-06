import {ThemeProvider} from 'styled-components'

import GlobalStyles from './components/style/Global';
import theme from './data/theme';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';



function App() {
  return (
    <Router>

      <ThemeProvider theme = {theme} > 
        <GlobalStyles />
        <Home />
      </ThemeProvider>

    </Router>
    
  );
}

export default App;
