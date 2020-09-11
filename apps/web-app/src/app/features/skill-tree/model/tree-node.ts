import {TreeNodeOverview} from './tree-node-overview';

export interface TreeNode {
  id: string;
  name: string;
  path: string[];
  children?: TreeNodeOverview[];
  siblings?: TreeNodeOverview[];
  breadcrumbs: TreeNodeOverview[][];
}
