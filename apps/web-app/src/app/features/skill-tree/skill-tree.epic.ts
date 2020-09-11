import {combineEpics} from 'redux-observable';
import {dummyEpic} from './dummy-epic/dummy-epic';

export const skillTreeEpic = combineEpics(
  dummyEpic
);
