import {SkillTreeNode} from './skill-tree-node';

export interface SkillTree {
  id: string;
  title: string;
  children: SkillTreeNode[];
}
