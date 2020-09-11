import {Card, CardContent} from '@material-ui/core';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import styled from 'styled-components';
import {AppState} from '../../../state/app-state';

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const StyledCard = styled(Card)`
  width: 600px;
`;

const SkillBrowserView = ({category, children}: ViewProps) => <CenteredDiv>
  <StyledCard>
    <CardContent>
      <div>{category.name}</div>
      <div>
        {children.map(child => <div key={child.id}>{child.name}</div>)}
      </div>
    </CardContent>
  </StyledCard>
</CenteredDiv>;

interface ViewProps extends ConnectedProps<typeof connector> {
}

const connector = connect(
  (state: AppState) => ({
    category: state.skillTree.nodes.byId.root,
    children: state.skillTree.nodes.byId.root.children.map(child => state.skillTree.nodes.byId[child])
  }),
  {}
);

export const SkillBrowser = connector(SkillBrowserView);
