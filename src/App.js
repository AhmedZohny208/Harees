import React, { useEffect } from 'react';
import './app.css';
import './sass/styles.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Views from './views';
import { Route, Switch } from 'react-router-dom';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from './configs/AppConfig';
import axios from 'axios';
import { HOST } from 'constants/ApiConstant';

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

function App() {
  useEffect(() => {
    const storedToken = localStorage.getItem("HaressOwnerjwtToken");
    const storedRefreshToken = localStorage.getItem("HaressOwnerjwtRefreshToken")
    
    if (storedToken && storedRefreshToken) {
      axios.defaults.headers.common['X-Auth-Token'] = storedToken;
      axios.defaults.headers.common['X-Auth-Refresh-Token'] = storedRefreshToken;

      axios.get(`${HOST}/owner/signing/token`).then(res => {
        localStorage.setItem("HaressOwnerjwtToken", res.headers['x-auth-token'])
        localStorage.setItem("HaressOwnerjwtRefreshToken", res.headers['x-auth-refresh-token'])
      }).catch(err => console.log(err))
    }
  })

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={THEME_CONFIG.currentTheme} insertionPoint="styles-insertion-point">
          <Router>
            <Switch>
              <Route path="/" component={Views}/>
            </Switch>
          </Router>
        </ThemeSwitcherProvider>
      </Provider>
    </div>
  );
}

export default App;
