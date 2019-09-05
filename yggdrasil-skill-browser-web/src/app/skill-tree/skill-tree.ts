import {SkillTreeNode} from './skill-tree-node';

export interface SkillTree {
  treeTitle: string;
  childNodes: SkillTreeNode[];
}
