import {Card, CardContent, CardHeader} from '@material-ui/core';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {AppState} from '../../../state/app-state';

const View = styled.div`
`;
const Main = styled.div`
  display: flex;
`;
const LeftPanel = styled.div`
  flex-basis: 250px;
`;
const RightPanel = styled.div`
  flex: 1;
`;
const NodeBreadcrumb = styled.div`
  display: flex;
  flex-direction: column;
`;
const CurrentNode = styled.div`
  font-weight: 500;
`;
const Nodes = styled.div`
  display: flex;
  flex-direction: column;
`;
const NodeLink = styled(Link)`
  margin-left: ${(props: { indent: number }) => props.indent * 8 ?? 0}px;
`;

const SkillBrowserView = ({category, breadcrumb}: ViewProps) => <View>
  <Main>
    <LeftPanel>
      <NodeBreadcrumb>
        {breadcrumb.map((crumb, idx) => <NodeLink indent={idx}
                                                  key={crumb.id}
                                                  to={`/skills?p=/${crumb.path.join('/')}`}>
          {crumb.name}
        </NodeLink>)}
      </NodeBreadcrumb>
      <CurrentNode>
        <NodeLink indent={breadcrumb.length}
                  to={`/skills?p=/${category.path.join('/')}`}>
          {category.name}
        </NodeLink>
      </CurrentNode>
      {category.children?.length > 0 ? <Nodes>
        {category.children.map(child => <NodeLink indent={breadcrumb.length + 1}
                                                  key={child.id}
                                                  to={`/skills?p=/${child.path.join('/')}`}>
          {child.name}
        </NodeLink>)}
      </Nodes> : undefined}
      {category.siblings?.length > 0 ? <Nodes>
        {category.siblings.map(child => <NodeLink indent={breadcrumb.length}
                                                  key={child.id}
                                                  to={`/skills?p=/${child.path.join('/')}`}>
          {child.name}
        </NodeLink>)}
      </Nodes> : undefined}
    </LeftPanel>
    <RightPanel>
      <Card>
        <CardHeader title={category.name} subheader={breadcrumb.map(crumb => crumb.name).join(' / ')} />
        <CardContent>
          The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of
          charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will
          strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the
          Lord when I lay My vengeance upon thee.
        </CardContent>
      </Card>
    </RightPanel>
  </Main>
</View>;

interface ViewProps extends ConnectedProps<typeof connector> {
}

const connector = connect(
  (state: AppState) => {
    const path = state.router.location['query']?.p?.split('/').filter(part => !!part);
    const nodesById = state.skillTree.nodes.byId;
    const category = path?.length > 0 ? nodesById[path[path.length - 1]] : nodesById[1];
    return {
      category: category,
      breadcrumb: category.breadcrumbs[0]
    };
  },
  {}
);

export const SkillBrowser = connector(SkillBrowserView);
