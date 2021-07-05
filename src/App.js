import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import CitySelect from './views/citySelect';
import Weather from './views/weather';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Route exact path="/" component={CitySelect}></Route>
          <Route exact path="/weather" component={Weather}></Route>
        </BrowserRouter>
      </div>
    </ThemeProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
