import {StylesProvider} from '@material-ui/core/styles';
import React, {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {appBootstrap} from './platform/app-bootstrap';
import {AppState} from './state/app-state';
import {UnauthenticatedApp} from './unauthenticated-app';

const AppWrapperView = ({bootstrapped}: ViewProps) => {
  useEffect(() => {
    bootstrapped()
  }, []);
  return <StylesProvider injectFirst>
    <UnauthenticatedApp/>
  </StylesProvider>;
}

interface ViewProps extends ConnectedProps<typeof connector> {
}

const connector = connect(
  (state: AppState) => ({}),
  {
    bootstrapped: () => appBootstrap()
  }
);

export const AppWrapper = connector(AppWrapperView);
