import {combineReducers} from '@reduxjs/toolkit';
import {connectRouter} from 'connected-react-router';
import {skillTreeReducer} from '../features/skill-tree/skill-tree.reducer';

export const rootReducer = history => combineReducers({
  router: connectRouter(history),
  skillTree: skillTreeReducer
});
