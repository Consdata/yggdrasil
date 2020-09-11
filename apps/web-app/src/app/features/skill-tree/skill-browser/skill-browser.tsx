import {Card, CardContent, Link} from '@material-ui/core';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import styled from 'styled-components';
import {AppState} from '../../../state/app-state';
import {SkillBrowserBreadcrumbs} from "./breadcrumbs";
import {LinkModel} from "./link.model";

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

const StyledCard = styled(Card)`
  width: 600px;

  .child-links {
    padding-left: 16px;
  }

   .link {
      display: block;
   }
`;

const SkillBrowserView = ({children, breadcrumbs, siblings}: ViewProps) => <CenteredDiv>
  <StyledCard>
    <SkillBrowserBreadcrumbs breadcrumbs={breadcrumbs}/>
    <CardContent>
      <div className="child-links">
        {children.map((child, idx) =>
          <Link color='inherit' className="link" key={idx} href={child.href}>
            {child.label}
          </Link>)}
      </div>
      <div className="sibling-links">
        {siblings.map((child, idx) =>
          <Link color='inherit' className="link" key={idx} href={child.href}>
            {child.label}
          </Link>)}
      </div>
    </CardContent>
  </StyledCard>
</CenteredDiv>;

interface ViewProps extends ConnectedProps<typeof connector> {
}

const pathParamName = 'path';

const connector = connect(
  (state: AppState) => {

    const path = new URLSearchParams(location.search).get(pathParamName) || 'root';
    const getNode = id => state.skillTree.nodes.byId[id];

    const redirectLink = (breadcrumbs: string) => {
      const params = new URLSearchParams(state.router.location.search);
      params.set(pathParamName, breadcrumbs);
      return state.router.location.pathname + '?' + params.toString();
    }

    const breadcrumbLinks = () => {
      const breadcrumbs: LinkModel[] = [];
      const parts = path.split('/');
      parts.forEach((id, idx) => {
        const parentPath = breadcrumbs.map(b => b.id).join('/');
        breadcrumbs.push({
          id,
          label: getNode(id).name,
          href: redirectLink(parentPath ? parentPath + '/' + id : id),
        })
      })
      return breadcrumbs;
    }

    const childLinks = (children: string[] = []) => {
      return children.map(childId => {
        const child = getNode(childId);
        return {
          id: childId,
          label: child.name,
          href: redirectLink(path + '/' + child.id)
        }
      })
    }

    const siblingLinks = (parentId: string, activeId: string) => {
      if (!parentId) {
        return [];
      }
      const parent = getNode(parentId);
      return (parent?.children || [])
        .filter(c => c !== activeId)
        .map(childId => {
          const child = getNode(childId);
          const parts = path.split('/');
          parts.pop();
          const parentPath = parts.join('/');

          return {
            id: childId,
            label: child.name,
            href: redirectLink(parentPath + '/' + child.id)
          }
        })
    }

    const breadcrumbs = breadcrumbLinks();
    const active = getNode(breadcrumbs[breadcrumbs.length - 1].id);
    const children = childLinks(active.children);
    const siblings = siblingLinks(breadcrumbs[breadcrumbs.length - 2]?.id, active.id,)
    console.log({
      active,
      children,
      breadcrumbs,
      siblings,
    })

    return ({
      active,
      children,
      breadcrumbs,
      siblings,
    });
  },
  {}
);

export const SkillBrowser = connector(SkillBrowserView);
