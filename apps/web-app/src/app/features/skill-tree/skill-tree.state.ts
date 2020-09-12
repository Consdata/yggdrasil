import {TreeNode} from './model/tree-node';

export interface SkillTreeState {
  nodes: {
    byId: {
      'root': TreeNode,
      [key: string]: TreeNode
    }
  }
}
