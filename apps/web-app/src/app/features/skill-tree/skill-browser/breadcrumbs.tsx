import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {LinkModel} from "./link.model";


export const SkillBrowserBreadcrumbs = ({breadcrumbs}: ViewProps) => {
  return <Breadcrumbs aria-label="breadcrumb">
    {breadcrumbs.map((crumb, index) =>
      <Link key={index}
            color={index === breadcrumbs.length - 1 ? 'textPrimary' : 'inherit'}
            href={crumb.href}
      >
        {crumb.label}
      </Link>)}
  </Breadcrumbs>;
};

interface ViewProps {
  breadcrumbs: LinkModel[];
}

