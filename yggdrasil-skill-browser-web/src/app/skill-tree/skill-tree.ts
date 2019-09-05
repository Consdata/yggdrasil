import {SkillTreeNode} from './skill-tree-node';

export interface SkillTree {
  id: string;
  treeTitle: string;
  childNodes: SkillTreeNode[];
}
