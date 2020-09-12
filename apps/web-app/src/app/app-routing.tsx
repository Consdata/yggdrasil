import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {PageNotFound} from './features/page-not-found/page-not-found';
import {SkillTree} from './features/skill-tree/skill-tree';

export const AppRouting = () => <Switch>
  <Redirect exact from="/" to="/skills"/>
  <Route exact path="/skills" component={SkillTree}/>
  <Route component={PageNotFound}/>
</Switch>;
