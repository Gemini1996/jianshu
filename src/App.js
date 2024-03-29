import React, { Component, Fragment} from 'react';
import { Provider } from 'react-redux'
import Header from './components/header'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style.js';
import { GlobalFontStyle } from './statics/iconfont/iconfont';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <GlobalFontStyle />
          <BrowserRouter>
            <Fragment>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
