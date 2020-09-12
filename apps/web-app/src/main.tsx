import CssBaseline from '@material-ui/core/CssBaseline';
import {ConnectedRouter} from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import styled from 'styled-components';
import {AppWrapper} from './app/app-wrapper';
import {browserHistory} from './app/platform/browser-history';
import {store} from './app/store/store';
import blue from '@material-ui/core/colors/blue';

const GlobalStyles = styled.div`
  a {
    text-decoration: none;
    &, &:active, &:focus {
      color: inherit;
    }
    &:hover {
      color: ${blue.A400}
    }
  }
`;

ReactDOM.render(
  <CssBaseline>
    <GlobalStyles>
      {/*<FirebaseContext.Provider value={firebaseApp}>*/}
      <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
          <AppWrapper/>
        </ConnectedRouter>
      </Provider>
      {/*</FirebaseContext.Provider>*/}
    </GlobalStyles>
  </CssBaseline>,
  document.getElementById('yggdrasil2')
);
