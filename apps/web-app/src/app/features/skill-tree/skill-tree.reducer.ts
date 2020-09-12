import {createReducer} from '@reduxjs/toolkit';
import {SkillTreeState} from './skill-tree.state';
import {skillTreeStateInitial} from './skill-tree.state-initial';

export const skillTreeReducer = createReducer<SkillTreeState>(
  skillTreeStateInitial,
  builder => builder
)
