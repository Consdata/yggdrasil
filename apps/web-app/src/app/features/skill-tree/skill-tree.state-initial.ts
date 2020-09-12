import {skillTreeDump} from './dump/skill-tree-dump';
import {SkillTreeState} from './skill-tree.state';

export const skillTreeStateInitial: SkillTreeState = {
    nodes: {byId: skillTreeDump as any}
  }
;
