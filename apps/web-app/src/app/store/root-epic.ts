import {combineEpics} from 'redux-observable';
import {skillTreeEpic} from '../features/skill-tree/skill-tree.epic';

export const rootEpic = combineEpics(
  skillTreeEpic
);
